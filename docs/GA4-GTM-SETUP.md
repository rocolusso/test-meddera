# GA4G-03: кастомные события сайта в GA4 через GTM

Сайт отправляет события через `gtag('event', ...)`, когда `NEXT_PUBLIC_GA4_TRANSPORT=gtm`. Сам Google tag контейнера их в GA4 не пересылает: он отправляет только автособытия (расширенные измерения). Чтобы формы, звонки и клики доходили до GA4, в контейнере `GTM-KFCP3D5F` нужен один тег GA4 Event. Он описан в файле `docs/gtm/meddera-ga4-events.container.json`.

## Что внутри файла

- Триггер «CE site events (GA4G-03)»: пользовательское событие, регулярка
  `^(phone_|lead_|cta_|developer_|form_sended_1$|messenger_click$|social_click$|channel_click$|page_not_found$)`.
- 17 переменных «Уровень данных», версия 2: `DLV eventModel.<параметр>`. Параметры события лежат в `eventModel`, а не на верхнем уровне `dataLayer`.
- Тег «GA4 event, site events (GA4G-03)»: имя события `{{Event}}`, идентификатор `G-V98H1SG9KW`, 17 строк параметров, один раз на событие.

## События и параметры

| Событие | Параметры сверх общих |
|---|---|
| `phone_click_simple1`, `phone_click_fixed_1` | `button_name`, `event_label`, `cta_source`, `procedure` |
| `messenger_click`, `social_click`, `channel_click` | `button_name`, `event_label`, `cta_source` |
| `phone_button_contacts1`, `form_sended_1` | `button_name`, `event_label` |
| `lead_sticky_cta_click`, `lead_sticky_form_sent` | `button_name`, `event_label`, `cta_source`, `procedure` |
| `cta_teaser_view`, `cta_teaser_dismiss`, `cta_teaser_click` | `cta_source`, `procedure`, `scroll_pct` |
| `developer_cta_click`, `developer_lead`, `developer_link_click` | `cta_source`, `lang`, `button_name`, `event_label`, `needs_count` |
| `page_not_found` | `page_type`, `missing_path`, `page_referrer` |

Общие параметры каждого события: `page_path`, `page_type`, `content_slug`, `lang`, `reception_state`, `first_src`, `first_med`, `first_cmp`, `first_ref`. Если у события нет параметра, тег его не отправляет.

`page_view` в регулярку не входит: просмотры идут от расширенных измерений GA4, так они не дублируются.

## Импорт

1. tagmanager.google.com, контейнер `GTM-KFCP3D5F`, вкладка «Администрирование», «Импортировать контейнер».
2. Выбери файл `meddera-ga4-events.container.json`. Рабочее пространство: «Новое», название `GA4G-03`.
3. Вариант импорта: «Объединить» и «Переименовывать конфликтующие теги, триггеры и переменные». «Перезаписать» не выбирай, иначе удалятся существующие теги.
4. В «Изменениях рабочего пространства» должно быть: 1 тег, 1 триггер, 17 переменных, встроенная переменная Event. Семь старых тегов на паузе не включай, будут дубли.

## Проверка перед публикацией

1. «Просмотр», адрес `https://meddera.md`, Connect.
2. В открывшейся вкладке нажми плавающую кнопку звонка и «Записаться».
3. В Tag Assistant выбери события `phone_click_fixed_1` и `lead_sticky_cta_click`. В «Тегах» должен быть сработавший тег `GA4 event, site events`, во вкладке «Отправленные обращения» хит с параметрами `cta_source`, `button_name`, `event_label` и остальными.
4. «Отправить», название версии `GA4G-03 custom events`, «Опубликовать».
5. GA4: Realtime (события видны сразу), DebugView при открытом Preview, обычные отчёты через сутки.

## Откат

В GTM: «Версии», предыдущая версия, «Опубликовать». Код сайта не меняется.

## Если импорт отклонён

Создай вручную:
1. Триггер: тип «Пользовательское событие», имя события `^(phone_|lead_|cta_|developer_|form_sended_1$|messenger_click$|social_click$|channel_click$|page_not_found$)`, включить «Использовать соответствие регулярному выражению».
2. 17 переменных типа «Переменная уровня данных», версия 2, имена `eventModel.button_name` и так далее по списку выше.
3. Тег «Google Аналитика: событие GA4», идентификатор `G-V98H1SG9KW`, имя события `{{Event}}`, параметры по таблице (имя параметра = переменная), триггер из пункта 1.

## Новые события

Событие с именем вне префиксов регулярки нужно добавить в триггер. Если у события новый параметр, добавь переменную `DLV eventModel.<параметр>` и строку в тег.

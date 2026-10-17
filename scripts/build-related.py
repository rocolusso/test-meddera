#!/usr/bin/env python3
"""
Writes src/blog-data/related-articles.ts: the hand picked "read also" list for every article.
The first entries are the closest in topic. Rubrics keep mostly their own links; neighbouring
rubrics are linked where the topic really overlaps (acne, sweating, eye area, lips, fillers).
Usage: python3 scripts/build-related.py [--print]   (--print only shows inbound statistics)
"""
import os, sys
from collections import defaultdict

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')

AL = {
 # dermatologist
 'consult': 'dermatolog-beltsy-kogda-nuzhna-konsultaciya', 'acne': 'akne-prichiny-stadii-lechenie',
 'psor': 'psoriaz-sovremennye-podhody-terapii', 'ecz': 'ekzema-kak-oblegchit-simptomy',
 'dscopy': 'dermatoskopiya-chto-eto-zachem-nuzhna', 'moles': 'rodinki-kogda-obratitsya-k-dermatologu',
 'fungus': 'gribkovye-infekcii-kozhi-diagnostika-lechenie', 'rosacea': 'rozacea-prichiny-metody-korrekcii',
 'atop': 'atopicheskij-dermatit-uhod-profilaktika', 'seb': 'seboreynyj-dermatit-prichiny-lechenie',
 'contact': 'kontaktnyj-dermatit-allergiya-razdrazhenie', 'vitiligo': 'vitiligo-chto-eto-mozhno-li-lechit',
 'papil': 'papillomy-borodavki-udalenie-beltsy', 'kerat': 'keratomy-chto-eto-nuzhno-li-udalyat',
 'alop': 'alopeciya-vypadenie-volos-prichiny', 'scalp': 'seboreya-kozhi-golovy-lechenie',
 'onych': 'onikhomikoz-gribok-nogtej-lechenie', 'ingrown': 'vrosshij-nogot-prichiny-lechenie',
 'sweat': 'gipergidroz-lechenie-beltsy', 'folli': 'follikulit-vospalenie-volosyanyh-follikulov',
 'impet': 'impetigo-bakterialnaya-infekciya-kozhi', 'urt': 'krapivnica-prichiny-lechenie',
 'pigm': 'pigmentnye-pyatna-prichiny-lechenie', 'photoag': 'fotostareenie-kozhi-profilaktika',
 'burn': 'solnechnye-ozhogi-pervaya-pomoshch', 'melan': 'melanoma-rannyaya-diagnostika',
 'basal': 'bazalioma-lechenie-udalenie', 'scc': 'ploskokletochnyj-rak-kozhi',
 'katop': 'detskij-atopicheskij-dermatit', 'kcont': 'detskij-kontaktnyj-dermatit',
 'photod': 'fotodermatozy-solnce', 'foot': 'mikoz-stop-konsultaciya', 'hidr': 'gidradenit-hronicheskij',
 'lichen': 'lichen-planus-obzor', 'ichth': 'ihthyoz-obzor', 'churt': 'kronicheskaya-krapivnica',
 'pyog': 'pyogenic-granuloma',
 # botox
 'b-know': 'botoks-beltsy-chto-nuzhno-znat', 'b-ind': 'botoks-pokazaniya-protivopokazaniya',
 'b-proc': 'botoks-kak-prohodit-procedura', 'b-zones': 'botoks-zony-injekcij',
 'b-compl': 'botoks-oslozhneniya-pobelochnye-effekty', 'b-freq': 'botoks-chastota-povtornyh-procedur',
 'b-age': 'botoks-vozrast-kogda-nachinat', 'b-vsfill': 'botoks-vs-fillery-raznica',
 'b-drugs': 'botoks-preparaty-vidy', 'b-crow': 'botoks-gusiyne-lapki',
 'b-forehead': 'botoks-lob-gorizontalnye-morshchiny', 'b-nose': 'botoks-nos-korrekciya',
 'b-neck': 'botoks-sheya-platizmy', 'b-sweat': 'botoks-gipergidroz-podmyshek',
 'b-brux': 'botoks-bruksizm-skrezhetanie-zubami', 'b-gum': 'botoks-desnevaya-ulybka',
 'b-migr': 'botoks-migreni-golovnye-boli', 'b-preg': 'botoks-beremennost-grudnoe-vskarmlivanie',
 'b-men': 'botoks-muzhchinam-osobennosti',
 # mesotherapy
 'm-what': 'mezoterapiya-lica-beltsy-chto-eto', 'm-comp': 'mezoterapiya-lica-preparaty-sostav',
 'm-proc': 'mezoterapiya-lica-kak-prohodit-procedura', 'm-course': 'mezoterapiya-lica-kurs-procedur',
 'm-swell': 'mezoterapiya-lica-otek-sinyaki', 'm-acne': 'mezoterapiya-lica-akne-postakne',
 'm-eye': 'mezoterapiya-lica-vokrug-glaz',
 # biorevitalization
 'r-what': 'biorevitalizaciya-beltsy-chto-eto', 'r-drugs': 'biorevitalizaciya-preparaty-gialoronovaya-kislota',
 'r-result': 'biorevitalizaciya-rezultaty-dlitelnost', 'r-course': 'biorevitalizaciya-kurs-procedur',
 'r-contra': 'biorevitalizaciya-protivopokazaniya', 'r-after': 'biorevitalizaciya-uhod-posle',
 'r-dry': 'biorevitalizaciya-suhaya-kozha', 'r-eye': 'biorevitalizaciya-vokrug-glaz',
 'r-combo': 'biorevitalizaciya-kombinaciya-procedur',
 # fillers
 'f-what': 'konturnaya-plastika-beltsy-chto-eto', 'f-types': 'fillery-vidy-sostav-proizvoditeli',
 'f-cheek': 'konturnaya-plastika-skul-podborodka', 'f-nasol': 'konturnaya-plastika-nososgubnye-skladki',
 'f-compl': 'konturnaya-plastika-oslozhneniya', 'f-combo': 'konturnaya-plastika-kombinaciya-procedur',
 # lips
 'l-types': 'uvelichenie-gub-beltsy-vidy-fillerov', 'l-shape': 'uvelichenie-gub-forma-simmetriya',
 'l-after': 'uvelichenie-gub-uhod-posle-procedury', 'l-compl': 'uvelichenie-gub-oslozhneniya-profilaktika',
 'l-natural': 'uvelichenie-gub-estestvenny-rezultat', 'l-asym': 'uvelichenie-gub-asimmetriya-korrekciya',
 'l-upper': 'uvelichenie-gub-verkhnyaya-nizhnyaya', 'l-age': 'uvelichenie-gub-vozrastnye-izmeneniya',
 'l-ha': 'uvelichenie-gub-gialuronovaya-kislota', 'l-pain': 'uvelichenie-gub-bolevye-oshchushcheniya',
 'l-first': 'uvelichenie-gub-pervyj-raz', 'l-repeat': 'uvelichenie-gub-povtornaya-procedura',
 'l-contra': 'uvelichenie-gub-protivopokazaniya', 'l-herpes': 'uvelichenie-gub-gerpes-profilaktika',
}

REL = {
 # dermatologist
 'consult': 'acne moles alop fungus pigm',
 'acne': 'm-acne rosacea folli hidr pigm',
 'psor': 'lichen vitiligo ecz ichth',
 'ecz': 'atop katop contact ichth psor',
 'dscopy': 'moles melan kerat papil basal',
 'moles': 'dscopy melan kerat papil consult',
 'fungus': 'foot onych ingrown impet folli',
 'rosacea': 'acne seb folli photoag consult',
 'atop': 'katop kcont ecz contact urt',
 'seb': 'scalp atop rosacea contact alop',
 'contact': 'kcont atop ecz urt churt',
 'vitiligo': 'pigm photod burn lichen consult',
 'papil': 'kerat pyog moles dscopy',
 'kerat': 'papil basal photoag scc pyog',
 'alop': 'scalp seb consult folli',
 'scalp': 'seb alop psor fungus',
 'onych': 'foot fungus ingrown consult',
 'ingrown': 'onych foot impet folli',
 'sweat': 'b-sweat hidr consult fungus',
 'folli': 'acne impet hidr fungus scalp',
 'impet': 'folli fungus katop ecz',
 'urt': 'churt contact photod ecz atop',
 'pigm': 'photoag vitiligo burn photod kerat',
 'photoag': 'pigm burn rosacea kerat r-what',
 'burn': 'photod photoag pigm melan scc',
 'melan': 'moles dscopy basal scc burn',
 'basal': 'scc melan kerat papil pyog',
 'scc': 'basal melan kerat photoag burn',
 'katop': 'kcont atop ecz contact',
 'kcont': 'katop contact atop urt',
 'photod': 'burn photoag urt pigm churt',
 'foot': 'onych fungus ingrown sweat',
 'hidr': 'folli acne sweat consult psor',
 'lichen': 'psor vitiligo ichth ecz',
 'ichth': 'psor lichen atop ecz',
 'churt': 'urt contact photod atop consult',
 'pyog': 'papil kerat moles basal dscopy',
 # botox
 'b-know': 'b-ind b-proc b-zones b-vsfill b-migr',
 'b-ind': 'b-preg b-compl b-age b-know b-drugs',
 'b-proc': 'b-zones b-compl b-freq b-know b-drugs',
 'b-zones': 'b-forehead b-crow b-gum b-neck b-nose',
 'b-compl': 'b-ind b-proc b-drugs b-preg',
 'b-freq': 'b-proc b-compl b-age b-drugs b-men',
 'b-age': 'b-ind b-freq b-forehead b-men b-know',
 'b-vsfill': 'f-what b-know b-zones b-freq b-compl',
 'b-drugs': 'b-proc b-compl b-freq b-ind b-know',
 'b-crow': 'b-forehead b-zones b-neck r-eye m-eye',
 'b-forehead': 'b-crow b-zones b-neck b-freq b-men',
 'b-nose': 'b-forehead b-zones b-gum b-compl b-ind',
 'b-neck': 'b-zones b-forehead b-crow b-nose b-vsfill',
 'b-sweat': 'sweat b-migr b-brux b-ind b-compl',
 'b-brux': 'b-migr b-sweat b-ind b-gum b-proc',
 'b-gum': 'b-zones b-nose b-neck b-brux l-upper',
 'b-migr': 'b-brux b-sweat b-ind b-compl',
 'b-preg': 'b-ind b-compl b-know b-drugs',
 'b-men': 'b-forehead b-zones b-freq b-age b-preg',
 # mesotherapy
 'm-what': 'm-comp m-proc m-course m-swell r-what',
 'm-comp': 'm-proc m-course m-acne m-what r-drugs',
 'm-proc': 'm-swell m-course m-comp m-eye m-what',
 'm-course': 'm-proc m-swell r-course m-what',
 'm-swell': 'm-proc m-course m-eye r-after m-acne',
 'm-acne': 'acne m-comp m-course m-swell',
 'm-eye': 'r-eye m-swell m-comp b-crow m-proc',
 # biorevitalization
 'r-what': 'r-drugs r-result r-course r-contra m-what',
 'r-drugs': 'r-what r-dry f-types r-result r-contra',
 'r-result': 'r-course r-after r-combo r-dry r-what',
 'r-course': 'r-result r-after r-combo m-course',
 'r-contra': 'r-what r-drugs r-after r-combo l-contra',
 'r-after': 'r-contra r-result r-course r-dry',
 'r-dry': 'r-drugs r-result r-after r-eye r-what',
 'r-eye': 'r-dry m-eye r-after r-drugs b-crow',
 'r-combo': 'f-combo m-what r-result r-course b-vsfill',
 # fillers
 'f-what': 'f-types f-cheek f-nasol f-compl f-combo',
 'f-types': 'f-what l-types f-cheek f-nasol f-compl',
 'f-cheek': 'f-nasol f-types f-combo f-compl f-what',
 'f-nasol': 'f-cheek f-types f-combo f-compl f-what',
 'f-compl': 'f-what f-types l-compl f-cheek f-combo',
 'f-combo': 'b-vsfill r-combo f-cheek f-nasol f-compl',
 # lips
 'l-types': 'l-ha l-first l-natural l-compl f-types',
 'l-shape': 'l-natural l-upper l-asym l-first l-repeat',
 'l-after': 'l-compl l-repeat l-pain l-natural l-first',
 'l-compl': 'l-after l-contra l-herpes f-compl l-pain',
 'l-natural': 'l-shape l-first l-upper l-repeat l-age',
 'l-asym': 'l-shape l-upper l-natural l-repeat l-compl',
 'l-upper': 'l-shape l-asym l-natural l-first l-types',
 'l-age': 'l-natural l-first l-repeat l-ha b-age',
 'l-ha': 'l-types l-first l-pain l-compl r-drugs',
 'l-pain': 'l-first l-after l-ha l-compl l-contra',
 'l-first': 'l-types l-pain l-contra l-age l-herpes',
 'l-repeat': 'l-natural l-after l-age l-asym l-ha',
 'l-contra': 'l-herpes l-first l-compl l-pain b-ind',
 'l-herpes': 'l-contra l-compl l-first l-after l-pain',
}

out = {}
inbound = defaultdict(int)
for k, v in REL.items():
    a = AL[k]
    lst = [AL[x] for x in v.split()]
    assert a not in lst and len(set(lst)) == len(lst), k
    out[a] = lst
    for b in lst: inbound[b] += 1
assert set(out) == set(AL.values()), set(AL.values()) - set(out)

low = sorted((n, i) for n, i in ((inbound[i], i) for i in out) if n < 3)
if '--print' in sys.argv:
    vals = sorted((inbound[i], i) for i in out)
    print('inbound min', vals[:8]); print('inbound max', vals[-6:])
    print('below 3:', low)
    sys.exit(0)

lines = [
    '/**',
    ' * Related articles per article, picked by topic (see scripts/build-related.py).',
    ' * Order matters: the first links are the closest in topic. Generated file: edit the script and rerun it.',
    ' */',
    'export const RELATED_ARTICLES: Record<string, string[]> = {',
]
for a in out:
    lines.append(f"  '{a}': [{', '.join(repr(x) for x in out[a])}],")
lines.append('};')
open(os.path.join(ROOT, 'src/blog-data/related-articles.ts'), 'w').write('\n'.join(lines) + '\n')
print('written', len(out), 'articles; below 3 inbound:', low)

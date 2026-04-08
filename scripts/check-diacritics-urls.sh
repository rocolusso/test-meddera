#!/bin/bash

echo "🔍 Проверка румынских URLs с диакритикой"
echo "========================================"
echo ""

urls=(
  "https://meddera.md/ro/blog/botox-bruxism-scrâșnit-dinți-balti"
  "https://meddera.md/ro/blog/botox-migrenă-dureri-cap-tratament-balti"
  "https://meddera.md/ro/blog/botox-sarcină-alăptare-balti"
  "https://meddera.md/ro/blog/botox-bărbați-particularități-balti"
  "https://meddera.md/ro/blog/conturare-pomeți-barbie-balti"
  "https://meddera.md/ro/blog/conturare-pomeți-balti"
)

for url in "${urls[@]}"; do
  echo "Проверка: $url"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status" = "200" ]; then
    echo "  ✅ Статус: $status (OK)"
  else
    echo "  ❌ Статус: $status (ERROR)"
  fi
  echo ""
done

echo "========================================"
echo "✅ Проверка завершена!"

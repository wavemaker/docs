#!/bin/bash
url_array=()
while IFS= read -r line; do
  url_array+=("$line")
done < <(git diff --name-status --diff-filter=d HEAD~1 HEAD | grep '^.*[.md]$' | awk '{print $(NF)}' | cut -d\. -f1 | cut -f2- -d '/')

echo "[" > ./cypress/fixtures/changedFiles.json
for ((i = 0; i < ${#url_array[@]}; i++)); do
  if (( $i == ${#url_array[@]} -1 )) 
  then
    echo "\"${url_array[$i]}\"" >> ./cypress/fixtures/changedFiles.json
  else
    echo "\"${url_array[$i]}\"," >> ./cypress/fixtures/changedFiles.json
  fi
done
echo "]" >> ./cypress/fixtures/changedFiles.json 
#!/bin/sh
my_array=()
while IFS= read -r line; do
  my_array+=("$line")
done < <(git diff --name-only HEAD HEAD~1 | grep '^.*[.md]$' | cut -d\. -f1 | cut -f2- -d '/')

echo "[" > ./cypress/fixtures/changedFiles.json
for ((i = 0; i < ${#my_array[@]}; i++)); do
  if (( $i == ${#my_array[@]} -1 )) 
  then
    echo "\"${my_array[$i]}\"" >> ./cypress/fixtures/changedFiles.json
  else
    echo "\"${my_array[$i]}\"," >> ./cypress/fixtures/changedFiles.json
  fi
done
echo "]" >> ./cypress/fixtures/changedFiles.json 
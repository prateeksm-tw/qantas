#!/bin/bash

if [ $# -ne 3 ]
  then
    echo "This script requires exactly 3 arguments: groupId artifactId 'App Title'"
    echo "For example: ./customize-app.sh 'com.adobe.gss' 'helloworld' 'Hello World'"
    exit 1
fi

# Rename all references of com.adobe.aem.app to $1.
find . -type f \( -name '*.xml' -o -name '*.html' -o -name README.md -o -name .gitignore -o -name fetch.sh -o -name locations.locationdata.json -o -name config.json -o -name app.js -o -name controllers.js -o -name LocationController.js -o -name ProfileController.js \) -depth -exec sed -i '' s/com.adobe.aem.app/$1/g {} \;

find . -name hybrid-reference-app -type d -depth -execdir mv {} $2 \;

# Rename all references of hybrid-reference-app to $2.
find . -type f \( -name '*.xml' -o -name '*.html' -o -name README.md -o -name .gitignore -o -name fetch.sh -o -name locations.locationdata.json -o -name config.json -o -name app.js -o -name controllers.js -o -name LocationController.js -o -name ProfileController.js -o -name services.js \) -depth -exec sed -i '' s/hybrid-reference-app/$2/g {} \;

# Rename Hybrid App Title (Hybrid Reference) to $3.
search_text_1="Hybrid Reference"
find . -type f \( -name '*.xml' -o -name '*.html' -o -name README.md -o -name ionic.project -o -name .gitignore -o -name fetch.sh -o -name locations.locationdata.json -o -name config.json -o -name app.js -o -name controllers.js -o -name LocationController.js -o -name ProfileController.js \) -depth -exec sed -i '' s/"${search_text_1}"/"$3"/g {} \;

# Rename Hybrid references from README.md to $3.
search_text_2="Hybrid reference"
search_text_3="hybrid reference"
find . -type f \( -name README.md \) -depth -exec sed -i '' s/"${search_text_2}"/"$3"/g {} \;
find . -type f \( -name README.md \) -depth -exec sed -i '' s/"${search_text_3}"/"$3"/g {} \;

# Rename package name to $1 in file img.png.java. If app name $1 contain hyphen (-) then replace this to (_002d).
search_text_4="hybrid_002dreference_002dapp"
replace_search_text_4=$(echo "$2" | sed "s/-/_002d/g")
find . -type f \( -name img.png.java \) -depth -exec sed -i '' s/"${search_text_4}"/"${replace_search_text_4}"/g {} \;

echo "Finished customizing app with \"$1\" groupId, \"$2\" artifactId, \"$3\" app title"
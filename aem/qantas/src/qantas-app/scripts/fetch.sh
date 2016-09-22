#!/bin/sh
rm -rf tmp
mkdir -p tmp
curl -u admin:admin \
-L http://localhost:4502/content/mobileapps/qantas/en/jcr:content/pge-app/app-config-dev.zip > tmp/app.zip
unzip tmp/app.zip -d tmp
rm tmp/app.zip
sleep 5

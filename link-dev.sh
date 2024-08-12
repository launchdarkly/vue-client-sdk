#!/bin/bash

echo "===== Installing all dependencies..."
npm install

echo "===== Building vue sdk"
npm run build

echo "===== Install prod dependencies"
rm -rf node_modules
npm install --production

echo "===== Linking to examples"
declare -a examples=(example)

for example in "${examples[@]}"
do
  echo "===== Linking to $example"
  mkdir -p ${example}/node_modules
  rm -rf ${example}/node_modules/launchdarkly-vue-client-sdk
  mkdir -p ${example}/node_modules/launchdarkly-vue-client-sdk/node_modules
  mkdir -p ${example}/node_modules/launchdarkly-vue-client-sdk/dist
  cp package.json ${example}/node_modules/launchdarkly-vue-client-sdk/package.json
  cp -r node_modules/* ${example}/node_modules/launchdarkly-vue-client-sdk/node_modules/
  cp -r dist/* ${example}/node_modules/launchdarkly-vue-client-sdk/dist/
done

#!/bin/bash

# See: https://github.com/launchdarkly/project-releaser/blob/master/docs/templates/npm.md

set -ue

echo "Using npm $(npm --version)"

echo; echo "Running npm install"
npm install || { echo "npm install failed" >&2; exit 1; }

echo; echo "Running lint check"
npm run lint || { echo "lint check failed" >&2; exit 1; }

echo "Running TypeScript check"
npm run check-typescript || { echo "TypeScript check failed" >&2; exit 1; }

echo "Building"
npm run build || { echo "Build failed" >&2; exit 1; }
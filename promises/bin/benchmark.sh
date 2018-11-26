#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
cd "$(dirname "${BASH_SOURCE[0]}")/.."

run_benchmarks() {
  printf "native..."
  time node lib/native.js

  echo ""

  printf "native async/await..."
  time node lib/native-async-await.js

  echo ""


  printf "bluebird..."
  time node lib/bluebird.js

  echo ""

  printf "bluebird async/await..."
  time node lib/bluebird-async-await.js

  echo ""
}

echo "node $(node --version)"

run_benchmarks

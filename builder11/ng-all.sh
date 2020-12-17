#!/bin/bash

ACTION=$1
shift

for PROJECT in $( find projects/* -maxdepth 0 -type d -printf '%f ' ); do
  echo "========== $PROJECT =========="
  echo "ng $ACTION $PROJECT $*"
  echo ""
  ng $ACTION $PROJECT $*
  echo ""
done

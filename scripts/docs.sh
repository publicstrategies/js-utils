#!/bin/bash

jsdoc2md --files src/**/*.ts --configure ./jsdoc2md.json | sed '/\\*\\*Kind\\*\\*/d' > README.md

BADGE_TRAVIS="[![Build Status](https://travis-ci.com/publicstrategies/js-utils.svg?branch=master)](https://travis-ci.com/publicstrategies/js-utils)"
BADGE_COVERALLS="[![Coverage Status](https://coveralls.io/repos/github/publicstrategies/js-utils/badge.svg?branch=master)](https://coveralls.io/github/publicstrategies/js-utils?branch=master)"

USAGE=$"
# js-utils
$BADGE_TRAVIS
$BADGE_COVERALLS
"

echo "$USAGE" | cat - README.md > temp && mv temp README.md
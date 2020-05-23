#!/bin/bash
# [![Build Status](https://travis-ci.com/publicstrategies/js-utils.svg?branch=master)](https://travis-ci.com/publicstrategies/js-utils)
jsdoc2md --files src/**/*.ts --configure ./jsdoc2md.json | sed '/\\*\\*Kind\\*\\*/d' > README.md
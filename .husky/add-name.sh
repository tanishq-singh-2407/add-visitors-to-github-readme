#! /usr/bin/bash

NAME=$1

deno run --allow-write --allow-read src/index.ts --visitor="$NAME"

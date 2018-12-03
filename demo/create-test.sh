#!/usr/bin/env bash
mgeneratejs -n 10000 template.json  | mongoimport -d parisLocal -c restaurants

#!/bin/bash

# Delete existing pattern-lab directory
rm -rf pattern-lab

# Install pattern-lab
composer create-project -n pattern-lab/edition-twig-standard pattern-lab

# Remove the generate pattern-lab source directory
rm -rf pattern-lab/source

# Symlink components as source for pattern-lab
ln -s ../components pattern-lab/source

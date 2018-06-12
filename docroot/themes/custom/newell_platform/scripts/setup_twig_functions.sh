#!/bin/bash

VENDOR="../../../../vendor"
TWIG_FUNCTIONS=(
  "drupal-pattern-lab/add-attributes-twig-extension/add_attributes.function.php"
  "drupal-pattern-lab/bem-twig-extension/bem.function.php"
)

for i in "${TWIG_FUNCTIONS[@]}"
do
  cp $VENDOR/$i ./components/_twig-components/functions/.
done

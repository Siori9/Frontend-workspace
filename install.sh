#!/bin/bash

# Installation à la racine
npm install

# Installation dans storybook root
cd storybook-root || exit
npm install

# Installation dans tps/tp-css
cd ../tps/tp-css || exit
npm install

# Installation dans tps/tp-framework/react
cd ../tp-framework/react || exit
npm install

# Installation dans tps/tp-framework/vuejs
cd ../vuejs || exit
npm install

echo "Toutes les installations sont terminées !"

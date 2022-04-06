# PORFOLIO 2022 EDITION

<br>
## INTRODUCTION

---

This is my first EVER personal portfolio page. GREAT!

### TECHNOLOGY

---

Portfolio is a React static web page, which utilizes Tailwind.css, PostCSS transpiler, Typescript as a superset of JS. For CSS I've used CSS module configuration, linter and formatter used are Prettier and ESlint. To make ESlit and Prettier work together the following dependancy is needed: https://github.com/prettier/eslint-config-prettier#installation

For study purposes I've used Vite as bundler, using `npm create vite@latest -- --template react-ts` (double hypens for npm version 7.0.0^).

### ERRORS

---

Possible errors occure with eslint configuration. Refer to offical config guide for eslint:

- First there were errors about tsx files| modules not being imported -either path or no type declaration, not finding modules etc. But upon adding .tsx components to component folder, this problems vanished. (WHY?)

https://frontendmasters.com/courses/complete-react-v5/introduction/

Complete Course Notes:
https://btholt.github.io/complete-intro-to-react-v5/

Course Repo:
https://github.com/btholt/complete-intro-to-react-v5

VSCODE Extensions

https://github.com/prettier/prettier-vscode

- set VSCODE to format on save

https://github.com/Microsoft/vscode-eslint

To get css code completion with emotion css prop, use:
https://github.com/styled-components/vscode-styled-components

Typescript:

1. npm install -D typescript
2. npx tsc --init

then open tsconfig.json

3. target = es2018 (or what you need)
4. change jsx 'preserve' to 'react'
5. set strict mode accordingly
6. npm install -D @types/react @types/react-dom @types/reach\_\_router

7. npm install -D tslint tslint-react tslint-config-prettier
8. in package.json change script "lint" to run "tslint --project"

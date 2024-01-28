# cv-admin-front

## environment

```
node -v
v20.5.0

npm -v
10.1.0
```

## setup

### NEXT.js

https://nextjs.org/docs/getting-started/installation#next-steps

```bash
npx create-next-app@latest
```

### server-only

https://nextjs.org/docs/getting-started/react-essentials#the-server-only-package

```bash
npm install server-only
```

### prettier

https://prettier.io/docs/en/install.html

```bash
npm install --save-dev --save-exact prettier
```

#### Git hooks

https://prettier.io/docs/en/install.html#git-hooks

```bash
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

##### Add the following to your package.json:

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

#### prettierignore

https://prettier.io/docs/en/ignore.html#ignoring-files-prettierignore

### OpenAPI ジェネレーター

https://openapi-generator.tech/docs/installation/

```bash
brew install openapi-generator
```

#### gen

```bash
openapi-generator generate -i /Users/sky0621/work/github.com/sky0621/cv-admin/schema/openapi.yml -g typescript-fetch -o ./src/lib/api/
```

### Ant Design

https://ant.design/

```
npm install antd
```

```
npm install @ant-design/colors
```

```
npm install @ant-design/nextjs-registry
```

### reset.css

https://github.com/mayank99/reset.css

```
npm install @acab/reset.css
```

### recoil

https://recoiljs.org/

```
npm install recoil
```

### zod

```
npm install zod
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

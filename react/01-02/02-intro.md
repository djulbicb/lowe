Server side rendering is becoming popular again with Next.js and Remix
Keeping the UI in Sync with data, example AirBnb

Problem with jQuery:
- require lots of DOM manipulation and imperative traversing -> spaghetti code
- Data (state) is stored in DOM, shared across the app

Framerwork:
- creates consistent codebase
- React is declarative, component-based, state-driven, js library for UI created by Facebook
- React uses techniques like virtual dom, fiber tree, one way data

React vs Vite:
- create-react-app: comes with prettier, jest, eslint
- vite: hot module replacement, fast reload and build.
- React frameworks like next.js and remix for server side rendering, data fetching, routing

React documentation:
- https://react.dev/reference/react
## Install:
### ide
```
visual studio code
plugin: ESLint, Prettier, One Monokai, Material Icon Theme
        - Quokka.js (run js in vsc) - View > Command Panel > Quokka: start in current file
settings: Save on Focus Change
          default formatter
          format on save
          esLint: onSave
```
### install
```
node -v
# 18...
```
### copy snippets 
Copy JSON, click on gear icon LB open user snippet
```
{
  "Print to console": {
    "prefix": "cl",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["console.log($1)"],
    "description": "console.log"
  },
  "reactComponent": {
    "prefix": "rfc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\treturn (",
      "\t\t<div>",
      "\t\t\t$0",
      "\t\t</div>",
      "\t)",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}}",
      ""
    ],
    "description": "React component"
  },
  "reactStyledComponent": {
    "prefix": "rsc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "import styled from 'styled-components'",
      "",
      "const Styled${TM_FILENAME_BASE} = styled.$0``",
      "",
      "function ${TM_FILENAME_BASE}() {",
      "\treturn (",
      "\t\t<Styled${TM_FILENAME_BASE}>",
      "\t\t\t${TM_FILENAME_BASE}",
      "\t\t</Styled${TM_FILENAME_BASE}>",
      "\t)",
      "}",
      "",
      "export default ${TM_FILENAME_BASE}",
      ""
    ],
    "description": "React styled component"
  }
}
```
## Basic html example 
type ! enter to html boilerplate
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        function MyApp() {
            return <h1>Hello world</h1>;
        }

        const container = document.getElementById("root")
        const root = ReactDOM.createRoot(container);
        root.render(<MyApp />);
    </script>
    
</body>
</html>
```
## Basic react app
```
npx create-react-app@5 jio-pizza-menu
npm run start 
npm start
```
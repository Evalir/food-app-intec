import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body,
html {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  background: white;
  overflow-x: hidden;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 33px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 20px;
}

h6 {
  font-size: 18px;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  font-size: 14px;
  color: #70757a;
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none;
}
button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
`;

export default GlobalStyles;

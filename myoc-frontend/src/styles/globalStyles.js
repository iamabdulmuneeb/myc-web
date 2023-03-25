import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* CSS RESET */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
    position: relative;
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #3E362E;
    width: 100%;
    min-height: 100%;
    line-height: 1.6;
    transition: opacity 1s;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: normal;
}

ul,
ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

input::placeholder,
textarea::placeholder {
  color: #999;
}

button::focus,
a::focus {
  outline: none;
}

button::-moz-focus-inner {
  border: 0;
}
/* end of CSS RESET */
`;

export default GlobalStyles;

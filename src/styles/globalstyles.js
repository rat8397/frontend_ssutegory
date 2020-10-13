import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
* {
    box-sizing:border-box;
}
body {
    height:100%;
    font-size:14px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin:0;
    background-color: #FAFAFA;
}
body #root{
    height:100%;
}
html {
height: 100%;
}
a {
    text-decoration:none;
    cursor:pointer;
}
`;

export default GlobalStyles;

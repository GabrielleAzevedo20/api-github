import { createGlobalStyle } from 'styled-components';
import globalBackground from '../assets/background.jpg';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #FFC312 url(${globalBackground}) no-repeat fixed;
    background-size: 1600px 750px;
    -webkit-font-smoothing: antialiased;
}

`;

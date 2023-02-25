import { createGlobalStyle as globalStyle } from "styled-components";
import { Palheta } from "../utils/Cores/palheta";

const rootConfig = globalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    #root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: ${Palheta.branco};
        background-color: ${Palheta.primaria};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        box-sizing: border-box;
    }

    body {
        min-width: 320px;
        min-height: 100vh;
        background-color: ${Palheta.secundaria};
    }
    
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }
    
    @keyframes logo-spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
    
    @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) .logo {
        animation: logo-spin infinite 20s linear;
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            color: #213547;
            background-color: #ffffff;
        }
    }
`;

export default rootConfig;
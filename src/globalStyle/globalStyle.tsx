import { createGlobalStyle as globalStyle } from "styled-components";
import { Palheta } from "../utils/Cores/palheta";

const rootConfig = globalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    #root {
        box-sizing: border-box;
        background-color: ${Palheta.background};
        color: ${Palheta.branco};
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
`;

export default rootConfig;
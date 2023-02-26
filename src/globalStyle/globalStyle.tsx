import { createGlobalStyle as globalStyle } from "styled-components";
import { Palheta } from "../utils/Cores/palheta";

const rootConfig = globalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100%;
        min-height: 100vh;
        min-width: 320px;
        background-color: ${Palheta.secundaria};
        color: ${Palheta.branco};
    }

    #root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: 16px;

        color-scheme: light dark;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
`;

export default rootConfig;
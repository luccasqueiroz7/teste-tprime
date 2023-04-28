import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    ul, ol, li { 
        list-style: none;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    :root {
       --error: #8b0000;
       --green: #03b898;
       --grey-1: #f8f9fa;
       --grey-2: #e9ecef;
       --grey-3: #868e86;
       --grey-4: #212529;
       --white: #ffffff;
    }

    
`;

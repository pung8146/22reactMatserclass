import 'styled-components';

declare module "styled-component" {
    export interface DefaultTheme {
        textColor : string;
        bgColor : string;
        accentColor: string;    
    };
    }

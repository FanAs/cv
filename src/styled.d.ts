import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    background2: string;
    foreground: string;
    primaryText: string;
    primaryLightText: string;
    secondaryText: string;
  }
}

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background-color: ${props => props.theme.colours.background};
    color: ${props => props.theme.colours.text};
    padding: 24px;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: ${props => props.theme.fonts.large};
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: ${props => props.theme.fonts.medium};
    font-weight: 500;
  }

  time {
    font-size: ${props => props.theme.fonts.medium};
    color: ${props => props.theme.colours.textLight};
  }

  p {
    font-size: ${props => props.theme.fonts.medium};
  }
`;
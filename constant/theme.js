import { DefaultTheme , configureFonts } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      headerBackground: 'linear-gradient(139deg, rgba(1,45,73,1) 34%, rgba(1,61,95,1) 54%, rgba(0,76,121,1) 77%, rgba(1,72,115,1) 100%, rgba(0,78,120,1) 100%)'
    }
  };


  export default theme
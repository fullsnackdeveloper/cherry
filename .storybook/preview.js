import '!style-loader!css-loader!sass-loader!../src/styles/stylesIndex.scss';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff'
      },
      {
        name: 'offWhite',
        value: '#F3F4F7'
      },
      {
        name: 'black',
        value: '#333333'
      },
    ],
  }
}
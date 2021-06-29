export const theme = {
  colors: {
    brand: {
      primary: '#E51C44',
      secondary: '#495BCC',
      linearBackground: ['#0E1647', '#0A1033'],
    },

    texts: {
      heading: '#DDE3F0',
      body: '#ABB1CC',
    },

    shapes: {
      boxLinear: ['#171F52', '#1D2766'],
      strokeLinear: ['#243189', '#1B2565'],
    },

    others: {
      online: '#32BD50',
      offline: '#E51C44',
      busy: '#D07622',
    },
  },

  backgroundGradient: {
    from: '#0E1647',
    to: '#0A1033',
  },

  fonts: {
    rajdhani: {
      bold: 'Rajdhani_700Bold',
      medium: 'Rajdhani_500Medium',
    },

    inter: {
      regular: 'Inter_400Regular',
      medium: 'Inter_500Medium',
    },
  },
} as const;

module.exports = {
  plugins:{
    autoprefixer:{
      "postcss-px-to-viewport":{
        viewportWidth: 375,
        viewportHeight: 667,
        viewportUnit: 'vw',
        unitPrecision: 5,
        selectorBlackList: ['ignore','tabbar','tabbaritem'],
        minPixelValue: 1,
        mediaQuery: false
      }
    }
  }
}

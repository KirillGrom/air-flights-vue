module.exports = {
    publicPath: 'air-flights-vue',
    pages:{
      searchFlights:{
        entry : 'src/main.js',
        template :'public/index.html',
        filename:'index.html'
      },
      listOfFlights:{
        entry : 'src/main.js',
        template :'public/index.html',
        filename:'listOfFlights/index.html'
      },
    }
  }
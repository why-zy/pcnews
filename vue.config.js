module.exports = {
    configureWebpack: {
        resolve: {
            css: {
                loaderOptions: {
                  css: {},
                  postcss: {
                    plugins: [
                      require('postcss-px2rem')({
                        remUnit: 192,
                      })
                    ]
                  }
                }
              }
    },
    }
    }

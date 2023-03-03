const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /* devServer: {
    port: 8080,
    proxy: {
      '/localhost:8085/demo1_war_exploded': {
        target: 'http://localhost:8085/demo1_war_exploded',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/localhost:8085/demo1_war_exploded': '',
        },
      },
    },
  }, */
});

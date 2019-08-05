const proxy = require("http-proxy-middleware");
//跨域配置
module.exports = (app)=>{
    app.use(proxy("/app",{
        target:"http://rap2api.taobao.org",
        changeOrigin:true
    })),
    app.use(proxy("/users",{
        target:"http://localhost:9008",
        changeOrigin:true
    }))
}
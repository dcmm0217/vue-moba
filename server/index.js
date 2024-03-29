const express =require('express')

const app = express()
app.set('secret','15f61asd3f1d5')
// 开启跨域代理
app.use(require('cors')())
app.use(express.json())
// 配置静态资源访问路径
app.use('/uploads',express.static(__dirname+'/uploads'))

// 连接数据库
require('./plugins/db')(app)
// 路由中间件
require('./routers/admin')(app)
require('./routers/web')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})


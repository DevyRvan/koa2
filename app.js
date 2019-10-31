// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa')

// 创建一个Koa对象表示web app本身:
const app = new Koa()
const serve = require('koa-static')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')

const router = require('./server/routes/index')
var cors = require('koa2-cors')
//允许跨域
app.use(cors({
  origin: '*'
}))

app.use(serve('./app'))

app.use(json())
app.use(bodyparser())

app.use(router.routes())
// 在端口3000监听:
app.listen(3000)
console.log('app started at port 3000...')
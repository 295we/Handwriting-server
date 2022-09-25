const express = require('express');
// 帮助解决路由history模式下的刷新问题
const history = require('connect-history-api-fallback');
const app = express();
// 必须在express.static之前使用history
app.use(history());

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello,world');
});

app.listen(3000, err => {
  if (!err) console.log('请访问：http://localhost:3000');
});

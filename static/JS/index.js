window.addEventListener('load', go);
function go() {
  // 获取元素
  var app = document.querySelector('.app');
  var search = document.querySelector('.search-warp');

  //   监听文档滚动
  document.onscroll = function () {
    // 文档滚动卷去的头部尺寸
    var scroll = document.documentElement.scrollTop;
    if (scroll > 0) {
      app.style.display = 'none';
      search.style.top = 0;
      search.style.backgroundColor = 'rgb(200, 37, 25)';
    } else {
      app.style.display = 'block';
      search.style.top = null;
      search.style.backgroundColor = '';
    }
  };

  // 时间函数
  let timer = document.querySelector('.timer');
  var inputime = +new Date('2022-8-26 0:0:0');
  countDown(); //打开时先执行一次函数，避免要等1s才出来
  let time = setInterval(countDown, 1000); //每过1s，执行一次countDown函数

  function countDown() {
    var nowtime = +new Date();
    times = (inputime - nowtime) / 1000;
    if (times > 0) {
      var h = parseInt((times / 60 / 60) % 24);
      h = h < 10 ? '0' + h : h;
      var m = parseInt((times / 60) % 60);
      m = m < 10 ? '0' + m : m;
      var s = parseInt(times % 60);
      s = s < 10 ? '0' + s : s;

      timer.innerHTML = `${h}:${m}:${s}`;
    } else {
      console.log('起始时间出错!');
      clearInterval(time);
      timer.innerHTML = '00:00:00';
    }
  }
}

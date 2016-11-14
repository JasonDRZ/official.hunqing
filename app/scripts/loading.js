/**
 * Created by JasonD on 16/10/24.
 */
window.addEventListener('DOMContentLoaded',function () {
  var loadBlock = document.getElementById('loading_section');
  if (!loadBlock){
    loadBlock = document.createElement('section');
    loadBlock.className = 'loading_section active';
    loadBlock.id = 'loading_section';
    loadBlock.innerHTML = '<div class="line_left"></div>' +
      '<div class="center_block">' +
      ' <img src="images/img_home/logo.jpg" alt="">' +
      '<span>Loading...<em>0%</em></span></div>' +
      '<div class="line_right"></div>';
    document.body.insertBefore(loadBlock,document.body.firstChild);
  }
  if (!loadBlock.classList.item('loading_section')) loadBlock.classList.add('loading_section');
  if (!loadBlock.classList.item('active')) loadBlock.classList.add('active');
  var leftLine = loadBlock.children[0],
    rightLine = loadBlock.children[2],
    centerBlock = loadBlock.children[1],
    loadingText = centerBlock.children[1],
    loadProgress = loadingText.children[0];
  var counter = 100,ptimes = 1,_wtimes = 0.49,init = 0;
  //进度条是否加载完成
  var progressDone = false;
  var loadingProgress = function () {
    loadingText.style.opacity = '1';
    var iner = function () {
      if (!progressDone){
        if (init <= counter - 70) {
          leftLine.style.width = rightLine.style.width = init * _wtimes + '%';
          loadProgress.innerHTML = Math.floor(init * ptimes) + '%';
          setTimeout(iner,50);
        } else if (init > (counter - 70) && init <= (counter - 40)) {
          leftLine.style.width = rightLine.style.width = init * _wtimes + '%';
          loadProgress.innerHTML = Math.floor(init * ptimes) + '%';
          setTimeout(iner,1000);
        } else if (init > (counter - 40) && init <= (counter - 20)) {
          leftLine.style.width = rightLine.style.width = init * _wtimes + '%';
          loadProgress.innerHTML = Math.floor(init * ptimes) + '%';
          setTimeout(iner,5000);
        } else if (init > (counter - 20) && init <= (counter - 10)) {
          leftLine.style.width = rightLine.style.width = init * _wtimes + '%';
          loadProgress.innerHTML = Math.floor(init * ptimes) + '%';
          setTimeout(iner,15000);
        } else setTimeout(function () {
          progressDone = true;
          loadingText.innerHTML = '加载失败，请重试！';
        },500);
        init ++;
      }
    };
    iner();
  };
  loadingProgress();
  var endProgress = function () {
    if (!progressDone) {
      progressDone = true;
      var endP = function () {
        if (init <= counter) {
          leftLine.style.width = rightLine.style.width = init * _wtimes + '%';
          loadProgress.innerHTML = Math.floor(init * ptimes) + '%';
          setTimeout(endP,10);
        } else setTimeout(function () {
          progressDone = true;
          loadBlock.classList.remove('active');
          setTimeout(function () {
            //require the hash url handle module
            if (requirejs) {
              requirejs(['require','part/in_page'],function (require,inPage) {
                if (inPage.page.index) {
                  require(['part/load_url']);
                }
              })
            }
          },300)
        },1200);
        init ++;
      }
      endP();
    }
  };
  //等待资源加载完毕
  window.onload = function () {
    endProgress();
  }
});


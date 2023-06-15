var bg = document.getElementById('background');

function adjustLayout() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    
    if (windowWidth < 1150) {
        bg.style.opacity = 0;
    } else {
        bg.style.opacity = 1;
    }
  }
  
  // 在窗口大小改变时触发调整排版
  window.addEventListener('resize', adjustLayout);
  
  // 页面加载完成后首次调整排版
  window.addEventListener('load', adjustLayout);
  
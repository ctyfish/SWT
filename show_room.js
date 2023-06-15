var row_1 = document.getElementById('row-1');
var col_1 = document.getElementById('col1');
var col_2 = document.getElementById('col2');
var picture = document.getElementById('picture');
var main = document.getElementById('main');
var share_btn = document.getElementById('share_btn');
function adjustLayout() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    
    if (windowWidth < 700) {
        main.style.height = '120vh';
        row_1.style.width = '80%';
        row_1.classList.add('d-flex' ,'justify-content-center');
        col_1.style.height = '67%';
        picture.style.height = '55%';
        col_2.style.height = '60%';
        col_1.classList.replace('mb-4','mb-3');
        col_2.classList.replace('mt-4','mt-3');
    } else {
        main.style.height = '85vh';
        row_1.style.width = '62%';
        row_1.classList.remove('d-flex' ,'justify-content-center');
        col_1.style.height = '89%';
        picture.style.height = '65%';
        col_2.style.height = '89%';
        col_2.classList.replace('mt-3','mt-4');
    }
  }
  
  // 在窗口大小改变时触发调整排版
  window.addEventListener('resize', adjustLayout);
  
  // 页面加载完成后首次调整排版
  window.addEventListener('load', adjustLayout);
  
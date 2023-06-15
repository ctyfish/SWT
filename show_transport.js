var bg = document.getElementById('back-ground');
var picture = document.getElementById('product-picture');
var content = document.getElementById('product-content');
var row = document.getElementById('row-center');
var main = document.getElementById('main');
var font_classification = document.getElementById('classification');
var font_product_name = document.getElementById('product-name');
var row_infor = document.getElementById('row_infor');
var name_display = document.getElementById('name');
var check_infor = document.getElementById('check-infor');
var avatar = document.getElementById('avatar');
var font_name = document.getElementById('name_font');
var distance = document.getElementById('distance');
var content_intro = document.getElementById('content-intro');
var share_btn = document.getElementById('share-btn');
function adjustLayout() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    
    if (windowWidth < 1150) {
        if (windowWidth < 450){
            picture.style.width = '15em';
            picture.style.height = '15em';
            content.style.width = "15em";
        }
        main.style.height = '200vw';
      //font
      font_classification.style.fontSize = '8px';
      font_product_name.style.fontSize = '18px';
      font_name.style.fontSize = '15px';
      row_infor.insertBefore(check_infor,name_display);
      check_infor.classList.replace('col-4','col-5');
      check_infor.style.marginLeft  = '33%';
      avatar.style.height = '13vw';
      avatar.style.width = '13vw';
      distance.style.height = '5%';
      distance.style.width = '50%';
      distance.style.marginTop = '10px';
      content_intro.style.marginTop = '30px';
      content_intro.style.width = '80%';
      share_btn.style.bottom = '-6em';
      // 窗口宽度在 600px 和 900px 之间时的排版
      // 修改元素的样式或布局
      bg.style.opacity = 0;
      content.classList.remove('rounded-circle');
      //position
      content.classList.remove('position-absolute');
      picture.classList.remove('position-absolute');
      main.classList.remove('position-relative');
      //col,row
      main.classList.replace('container','container-fluid');
      content.classList.add('col-sm-1');
      picture.classList.add('col-sm-1');
      //height:
      content.style.height = '120vw';
      //padding/margin
      picture.style.margin = '20px';
      //flex
      main.classList.add('d-flex','justify-content-center');
      row.classList.add('d-flex','justify-content-center');
    } else {
      //font
      font_classification.style.fontSize = '14px';
      font_product_name.style.fontSize = '28px';
      font_name.style.fontSize = '18px';
      row_infor.insertBefore(name_display,check_infor);
      check_infor.classList.replace('col-5','col-4');
      check_infor.style.marginLeft  = '0px';
      avatar.style.height = '8vh';
      avatar.style.width = '8vh';
      distance.style.height = '8%';
      distance.style.width = '70%';
      distance.style.marginTop = '0px';
      content_intro.style.marginTop = '0px';
      content_intro.style.width = '60%';
      share_btn.style.bottom = '-5em';
      // 窗口宽度大于等于 900px 时的排版
      // 修改元素的样式或布局
      bg.style.opacity = 1;
      content.classList.add('rounded-circle');
      //position
      content.classList.add('position-absolute');
      picture.classList.add('position-absolute');
      main.classList.add('position-relative');
      //col,row
      main.classList.replace('container-fluid','container');
      content.classList.remove('col-sm-1');
      picture.classList.remove('col-sm-1');
      //height:
      picture.style.width = '22em';
      picture.style.height = '22em';
      content.style.width = "26em";
      content.style.height = '26em';
      main.style.height = '85vh';
      //padding/margin
      picture.style.margin = '0px';
      //flex
      main.classList.remove('d-flex','justify-content-center');
      row.classList.remove('d-flex','justify-content-center');
    }
  }
  
  // 在窗口大小改变时触发调整排版
  window.addEventListener('resize', adjustLayout);
  
  // 页面加载完成后首次调整排版
  window.addEventListener('load', adjustLayout);
  
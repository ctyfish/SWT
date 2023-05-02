$(document).ready(function(){
    var newitems = document.createElement("div");
        newitems.setAttribute('type','button')
        newitems.classList.add('itemblock','col-md-2','mt-4');
        newitems.innerHTML="<img src='./icon/example.jpg' style='height:fit-content;max-width:100%;object-fit:contain;'>\n"+
        "<h6 style='color:#573605;font-weight:700;margin-top:10px;padding-left:10px;'>【享食】</h6>\n"+
        "<h5 style='color:#573605;font-weight:700;margin-top:10px;padding-left:10px;'>七彩水果盤</h5>\n"+
        "<h5 style='color:#FABD51;font-weight:700;margin-bottom:10px;text-align:end;padding-right:10px;'>NT$300</h5>\n"+
        "</div>\n";
    document.getElementById("additem").appendChild(newitems);
})
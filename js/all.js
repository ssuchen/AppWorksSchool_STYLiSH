//ajax 撈資料
function ajax(src, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", src, true);
  xhr.onload = function() {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send(null);
}
//宣告全域變數---------------------------------------------------------
let count = 0;
let fst;

//===============================================================

function UserChoose() {
  //取出 localStorage 的資料筆數
  let getlist = JSON.parse(localStorage.getItem("shoplist"));
  if (getlist == null) {
    getlist = 0;
  } else {
    getlist = getlist.length;
  }

  let cartcount = document.querySelectorAll(".cart-list-conut");
  let len = cartcount.length;
  for (let i = 0; i < len; i++) {
    cartcount[i].textContent = getlist;
  }
}

//抓取pading 宣告全域變數
let Clothingtype = "all";
let Paging;
let imgId;
let page_url;

function render(data) {
  //========滾輪往下 觸發事件loading=====================================================================

  let cardList = document.querySelector(".card-list");
  let len = data.data.length;

  //假設撈回來的字串是0
  if (len == 0) {
    let nontext = document.querySelector(".index-content-width");
    let str = "<ul class='card-list nontext'><p>找不到此商品</p></ul>";
    nontext.innerHTML = str;
  }

  //======畫出產品列的迴圈========================================

  for (let i = 0; i < len; i++) {
    //========產品的id編號==========================================
    imgId = data.data[i].id;

    //========產品頁編寫====================================================================================
    //clothes-card
    let clothesCard = document.createElement("li");
    clothesCard.setAttribute("class", "clothes-card");

    //card-img
    let cardImg = document.createElement("div");
    cardImg.setAttribute("class", "clothes-img");

    let cardPhoto = data.data[i].main_image;

    //新增圖片標籤
    let ImgLink = document.createElement("a");
    ImgLink.setAttribute("href", "product.html?id=" + imgId);
    let img = document.createElement("img");
    img.setAttribute("style", "width:100%;height:100%;");
    img.src = cardPhoto;

    //card-body
    let cardBody = document.createElement("div");
    let colorChooseUl = document.createElement("ul");
    colorChooseUl.setAttribute("class", "color-choose");

    //清除浮動
    let clearnFix = document.createElement("div");
    clearnFix.setAttribute("class", "clear-fix");

    //商品名稱
    let clothesNameDiv = document.createElement("div");
    clothesNameDiv.setAttribute("class", "clothes-name");
    let clothesName = document.createElement("h5");
    let text = data.data[i].title;
    clothesName.textContent = text;

    //商品價錢
    let clothesPriceDiv = document.createElement("div");
    clothesPriceDiv.setAttribute("class", "clothes-price");
    let clothesPrice = document.createElement("h5");
    let price = data.data[i].price;
    clothesPrice.textContent = price;

    //選擇顏色

    let clen = data.data[i].colors.length;
    for (let a = 0; a < clen; a++) {
      let color = data.data[i].colors[a].code;
      let colorChoose = document.createElement("li");

      colorChoose.setAttribute("style", "background:#" + color);
      colorChoose.setAttribute("class", "clothes-color");

      //將顏色放上ul
      colorChooseUl.appendChild(colorChoose);
    }

    //串div
    clothesPriceDiv.appendChild(clothesPrice);
    clothesNameDiv.appendChild(clothesName);
    ImgLink.appendChild(clothesCard);
    //render
    cardList.appendChild(ImgLink);
    ImgLink.appendChild(clothesCard);
    clothesCard.appendChild(cardImg);
    cardImg.appendChild(img);
    clothesCard.appendChild(cardBody);
    cardBody.appendChild(colorChooseUl);
    cardBody.appendChild(clearnFix);
    cardBody.appendChild(clothesNameDiv);
    cardBody.appendChild(clothesPriceDiv);
  }

  //========滾輪往下 觸發事件loading==============================================================

  //撈取paging 判斷如果不等於沒有 觸發監聽事件
  Paging = data.paging;
  if (Paging !== undefined) {
    window.addEventListener("scroll", loadingPage, false);
  }

  //購物筆數
  UserChoose();
}

//========抓取 loading 事件的連結位置==============================================================

//抓取paging的頁數網址
function ajaxLoading(type, textpage) {
  let linkLoading =
    "https://api.appworks-school.tw/api/1.0/products/" +
    type +
    "?paging=" +
    textpage;
  return linkLoading;
}

//========= loading事件載入事件 ==========================================================

//設要綁定的對象
let contentScroll = document.getElementById("contentScroll");

//設一個監聽 scroll 觸發一個ckeckSide事件
function loadingPage() {
  //瀏覽器到物件底部的高度
  let contentbottom = contentScroll.getBoundingClientRect().bottom;
  //瀏覽器高度
  let webHeight = window.innerHeight;

  //當物件底部出現,物件距離小於瀏覽器高度時 觸發事件
  if (webHeight > contentbottom) {
    ajax(ajaxLoading(Clothingtype, Paging), function(response) {
      render(response);
    });

    //當事件執行後取消監聽
    window.removeEventListener("scroll", loadingPage, false);
  }
}

//==========================燈箱效果==========================================================

let carousel = document.querySelector(".Carousel");
function imgrender(data) {
  //指定要掛的位置
  let len = data.data.length;
  for (let i = 0; i < len; i++) {
    //照片資訊
    let Photo = "https://api.appworks-school.tw" + data.data[i].picture;
    let bgLink = document.createElement("div");
    bgLink.setAttribute(
      "style",
      'background-image:url("' + Photo + '");width:100%;height:100%;'
    );
    bgLink.setAttribute("class", "carousel-bg");
    carousel.appendChild(bgLink);

    //文字資訊
    let content = data.data[i].story;
    let contentText = document.createElement("h4");
    contentText.setAttribute("class", "Carousel-text");

    bgLink.appendChild(contentText);
    contentText.textContent = content;
  }
}

//燈箱切換效果
function campaignsLink() {
  let campaignslinke =
    "https://api.appworks-school.tw/api/1.0/marketing/campaigns";
  return campaignslinke;
}
//燈箱資料連結
ajax(campaignsLink(), function(response) {
  imgrender(response);
});

//設定燈箱監聽
let Run = setInterval(ImgRun, 10000);
CarouselBtn = document.querySelectorAll(".Carousel-btn");

function ImgRun() {
  fst = document.querySelectorAll(".carousel-bg");
  let len = document.querySelectorAll(".carousel-bg").length;

  for (let i = 0; i < len; i++) {
    fst[i].classList.remove("showlmage");
    CarouselBtn[i].classList.remove("Carousel-btn-show");
  }
  if (count > 2) {
    count = 0;
  }
  fst[count].classList.add("showlmage");
  CarouselBtn[count].classList.add("Carousel-btn-show");
  count++;
}

//點擊按鈕 執行到指定的圖片

CarouselBtn[0].addEventListener("click", function() {
  let len = document.querySelectorAll(".carousel-bg").length;
  for (let i = 0; i < len; i++) {
    fst[i].classList.remove("showlmage");
    CarouselBtn[i].classList.remove("Carousel-btn-show");
  }
  fst[0].classList.add("showlmage");
  CarouselBtn[0].classList.add("Carousel-btn-show");
});

CarouselBtn[1].addEventListener("click", function() {
  let len = document.querySelectorAll(".carousel-bg").length;
  for (let i = 0; i < len; i++) {
    fst[i].classList.remove("showlmage");
    CarouselBtn[i].classList.remove("Carousel-btn-show");
  }
  fst[1].classList.add("showlmage");
  CarouselBtn[1].classList.add("Carousel-btn-show");
});
CarouselBtn[2].addEventListener("click", function() {
  let len = document.querySelectorAll(".carousel-bg").length;
  for (let i = 0; i < len; i++) {
    fst[i].classList.remove("showlmage");
    CarouselBtn[i].classList.remove("Carousel-btn-show");
  }
  fst[2].classList.add("showlmage");
  CarouselBtn[2].classList.add("Carousel-btn-show");
});
//=========================================================================================

//========預設抓取全部 連結位置==============================================================

//抓到網址的query string
let getUserString = location.href;
//將字串轉成url
let OtherUrl = new URL(getUserString);
//找到id後方的字串
let getOtherUrlString = OtherUrl.searchParams.get("id");

if (
  getOtherUrlString == "women" ||
  getOtherUrlString == "men" ||
  getOtherUrlString == "accessories"
) {
  if (getOtherUrlString == "women") {
    changePage("women");
  } else if (getOtherUrlString == "men") {
    changePage("men");
  } else {
    changePage("accessories");
  }
} else {
  ajax(ajaxLine("all"), function(response) {
    render(response);
  });
}

//========抓取 男裝 女裝 連結位置============================================================
//點選連結

function ajaxLine(text) {
  let link = "https://api.appworks-school.tw/api/1.0/products/" + text;
  return link;
}

//======點選 男裝 女裝按鈕 觸發事件===========================================================

//按鈕點選

function changePage(string) {
  Clothingtype = string;
  //重新放上新標籤
  let text = document.querySelector(".index-content-width");
  let str = "<ul class='card-list' id='contentScroll'></ul>";
  text.innerHTML = str;

  ajax(ajaxLine(string), function(response) {
    render(response);
  });
}

//============search 搜尋事件=====================================================

//設定search按鈕 綁定監聽
ImgLink = document.createElement("a");
ImgLink.setAttribute("href", "product.html?id=" + imgId);

//web版/tab版 search監聽事件
let searchvalue;
let searchBtnWeb = document.querySelector(".search-btn-web");
searchBtnWeb.addEventListener("click", searchContentWeb, false);

let searchBtnTab = document.querySelector(".search-btn-tab");
searchBtnTab.addEventListener("click", searchContent, false);

//=======web版 篩選===============================================
function searchContentWeb(e) {
  e.preventDefault();
  //抓到網址的query string
  let searchString = location.href;
  //將字串轉成url
  let searchUrl = new URL(searchString);
  //找到id後方的字串
  searchvalue = searchUrl.searchParams.get("id");

  //選定id事件
  let searchText = document.querySelector("#searchText-web");
  //撈到使用者的輸入
  let textvalue = searchText.value;

  //點選連結
  function ajaxLine(textinput) {
    let linktext =
      "https://api.appworks-school.tw/api/1.0/products/search?keyword=" +
      textinput;
    return linktext;
  }

  //重新放上新標籤
  let text = document.querySelector(".index-content-width");
  let str = "<ul class='card-list' id='contentScroll'></ul>";
  text.innerHTML = str;

  ajax(ajaxLine(textvalue), function(response) {
    render(response);
  });
}

//=======tab版 篩選=======

function searchContent(e) {
  e.preventDefault();
  //選定id事件

  let searchText = document.querySelector("#searchText-tab");
  //撈到使用者的輸入
  let textvalue = searchText.value;
  //點選連結
  function ajaxLine(textinput) {
    let linktext =
      "https://api.appworks-school.tw/api/1.0/products/search?keyword=" +
      textinput;
    return linktext;
  }

  //重新放上新標籤
  let text = document.querySelector(".index-content-width");
  let str = "<ul class='card-list' id='contentScroll'></ul>";
  text.innerHTML = str;

  ajax(ajaxLine(textvalue), function(response) {
    render(response);
  });
}

//mobile版 search監聽事件(移除logo及按鈕 增加bar)
let searchBtnMobile = document.querySelector(".search-btn-mobile");
searchBtnMobile.addEventListener("click", removeTitle, false);

//移除mobile版本的logo
function removeTitle() {
  let logoRemove = document.querySelector(".title-logo-small");
  let searchlogo = document.querySelector(".search-btn-mobile");
  logoRemove.remove();
  searchlogo.remove();
}
// 顯示search bar class切換
searchBtnMobile.addEventListener("click", barShow, false);
function barShow() {
  let barclose = document.querySelector(".search-bar-close");
  if (barclose.getAttribute("class") == "search-bar-close") {
    barclose.setAttribute("class", "search-bar-open");
  }
}

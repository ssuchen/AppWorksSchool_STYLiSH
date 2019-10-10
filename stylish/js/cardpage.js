//將product 畫在 htlm上

listArray = JSON.parse(localStorage.getItem("shoplist"));

let listArraylen;
if (listArray == null) {
  listArraylen = 0;
} else {
  listArraylen = listArray.length;
}

let shoopingcartlistcard;
let localStoragePrice;
let localStorageqty;
let localStoragTotal;
let subtotal; //小計
let total; //最後總金額
let localStoragTotalall = 0;

function shopListrrender() {
  for (let i = 0; i < listArraylen; i++) {
    let title = listArray[i].name;
    let color = listArray[i].color.name;
    let id = listArray[i].id;
    let size = listArray[i].size;
    localStoragePrice = listArray[i].price;

    let img = listArray[i].Img;
    let variants = listArray[i].variants;

    localStorageqty = parseInt(listArray[i].qty);

    localStoragTotal = localStoragePrice * localStorageqty;
    localStoragTotalall += localStoragTotal;

    let shoopingcartlistcard = document.createElement("div");
    shoopingcartlistcard.setAttribute("class", "shoopingcart-list-card");
    shoopingcartlistcard.setAttribute("id", i); //給區塊一個編號 再刪除時可運用

    //掛在 shoopingcart-list-card
    let shoopingcartListCardLeft = document.createElement("div");
    shoopingcartListCardLeft.setAttribute(
      "class",
      "shoopingcart-list-card-left"
    );

    let shoopingcartListTitleMobile = document.createElement("ul");
    shoopingcartListTitleMobile.setAttribute(
      "class",
      "shoopingcart-list-title-mobile"
    );

    let shoopingcartListCardRight = document.createElement("div");
    shoopingcartListCardRight.setAttribute(
      "class",
      "shoopingcart-list-card-right"
    );

    //掛在 shoopingcart-list-card-left

    let shoopingcartCommodityImg = document.createElement("img");
    shoopingcartCommodityImg.setAttribute(
      "class",
      "shoopingcart-commodity-img"
    );
    shoopingcartCommodityImg.setAttribute("src", img);

    let shoopingcartListCardLeftUl = document.createElement("ul");
    shoopingcartListCardLeftUl.setAttribute(
      "class",
      "shoopingcart-list-card-left-ul"
    );

    let shoopingcartCommodityTitle = document.createElement("li");
    shoopingcartCommodityTitle.setAttribute(
      "class",
      "shoopingcart-commodity-title"
    );
    shoopingcartCommodityTitle.textContent = title;

    let shoopingcartCommodityId = document.createElement("li");
    shoopingcartCommodityId.setAttribute("class", "shoopingcart-commodity-id");
    shoopingcartCommodityId.textContent = id;

    let shoopingcartCommodityColordiv = document.createElement("li");

    let shoopingcartCommodityColor = document.createElement("div");
    shoopingcartCommodityColor.setAttribute(
      "class",
      "shoopingcart-commodity-color"
    );
    shoopingcartCommodityColor.textContent = "顏色｜" + color;

    let shoopingcartCommoditySize = document.createElement("div");
    shoopingcartCommoditySize.setAttribute(
      "class",
      "shoopingcart-commodity-size"
    );
    shoopingcartCommoditySize.textContent = "尺寸｜" + size;

    let trashCanMobile = document.createElement("div");
    trashCanMobile.setAttribute("class", "trash-can-mobile");

    let trashCanMobileImg = document.createElement("img");
    trashCanMobileImg.setAttribute("src", "img/cart-remove.png");
    trashCanMobileImg.classList.add("trash-can-btn");
    trashCanMobileImg.classList.add("trash-click-mobile");

    //掛在 shoopingcart-list-title-mobile

    shoopingcartListTitleMobile = document.createElement("ul");
    shoopingcartListTitleMobile.setAttribute(
      "class",
      "shoopingcart-list-title-mobile"
    );

    ListTitleMobileCount = document.createElement("li");
    ListTitleMobileCount.textContent = "數量 ";

    ListTitleMobilePrice = document.createElement("li");
    ListTitleMobilePrice.textContent = "單價";

    ListTitleMobileTotal = document.createElement("li");
    ListTitleMobileTotal.textContent = "小計 ";

    ////掛在 shoopingcart-list-card-right

    let shoopingcartCommodityQuantity = document.createElement("div");
    shoopingcartCommodityQuantity.setAttribute(
      "class",
      "shoopingcart-commodity-Quantity"
    );
    let shoopingcartCommodityQuantityInput = document.createElement("input");
    shoopingcartCommodityQuantityInput.setAttribute("type", "number");
    shoopingcartCommodityQuantityInput.setAttribute("class", "checknumber");
    shoopingcartCommodityQuantityInput.setAttribute("max", variants);
    shoopingcartCommodityQuantityInput.setAttribute("min", "1");
    shoopingcartCommodityQuantityInput.setAttribute("value", localStorageqty);
    shoopingcartCommodityQuantityInput.textContent = localStorageqty;

    let shoopingcartCommodityPrice = document.createElement("div");
    shoopingcartCommodityPrice.setAttribute(
      "class",
      "shoopingcart-commodity-price"
    );
    shoopingcartCommodityPrice.textContent = "NT" + localStoragePrice;

    let shoopingcartCommodityTotal = document.createElement("div");
    shoopingcartCommodityTotal.setAttribute(
      "class",
      "shoopingcart-commodity-total"
    );
    shoopingcartCommodityTotal.textContent = "NT" + localStoragTotal;

    let trashCan = document.createElement("div");
    trashCan.setAttribute("class", "trash-can");
    trashCan.classList.add("trash-can-btn");

    let trashCanImg = document.createElement("img");
    trashCanImg.setAttribute("src", "img/cart-remove.png");
    trashCanImg.classList.add("trash-click");

    let shoopingcartListContentTop = document.querySelector(
      ".shoopingcart-list-content-top"
    );
    shoopingcartListContentTop.appendChild(shoopingcartlistcard);

    //掛在 shoopingcart-list-card
    shoopingcartlistcard.appendChild(shoopingcartListCardLeft);
    shoopingcartlistcard.appendChild(shoopingcartListTitleMobile);
    shoopingcartlistcard.appendChild(shoopingcartListCardRight);

    //掛在 shoopingcart-list-card-left

    shoopingcartListCardLeft.appendChild(shoopingcartCommodityImg);
    shoopingcartListCardLeft.appendChild(shoopingcartListCardLeftUl);
    shoopingcartListCardLeftUl.appendChild(shoopingcartCommodityTitle);
    shoopingcartListCardLeftUl.appendChild(shoopingcartCommodityId);
    shoopingcartListCardLeftUl.appendChild(shoopingcartCommodityColordiv);

    shoopingcartCommodityColordiv.appendChild(shoopingcartCommodityColor);
    shoopingcartCommodityColordiv.appendChild(shoopingcartCommoditySize);

    shoopingcartListCardLeft.appendChild(trashCanMobile);
    trashCanMobile.appendChild(trashCanMobileImg);

    //掛在 shoopingcart-list-title-mobile
    shoopingcartListTitleMobile.appendChild(ListTitleMobileCount);
    shoopingcartListTitleMobile.appendChild(ListTitleMobilePrice);
    shoopingcartListTitleMobile.appendChild(ListTitleMobileTotal);

    ////掛在 shoopingcart-list-card-right
    shoopingcartListCardRight.appendChild(shoopingcartCommodityQuantity);
    shoopingcartCommodityQuantity.appendChild(
      shoopingcartCommodityQuantityInput
    );
    shoopingcartListCardRight.appendChild(shoopingcartCommodityPrice);
    shoopingcartListCardRight.appendChild(shoopingcartCommodityTotal);
    shoopingcartListCardRight.appendChild(trashCan);
    trashCan.appendChild(trashCanImg);

    //移除表單 trash-click-mobile
    let trash = document.querySelectorAll(".trash-click");
    let trashMobile = document.querySelectorAll(".trash-click-mobile");
    trashMobile[i].addEventListener("click", removelocal);

    trash[i].addEventListener("click", removelocal);

    let trashsite = document.querySelectorAll(".trash-can");
    let obj = trashsite[i].parentNode.parentNode.id;

    //console.log(obj)

    function removelocal() {
      alert("已從購物車移除" + title);
      listArray.splice(obj, 1);
      localStorage.setItem("shoplist", JSON.stringify(listArray));
      window.location.reload();
    }

    //總金額
    let TotalcartMoney = document.querySelector("#total-money");
    TotalcartMoney.innerHTML = localStoragTotalall;

    //應付金額

    let PayMoney = document.querySelector("#pay-money");
    PayMoney.innerHTML = localStoragTotalall + 30;

    let cartText = document.querySelector("#cart-text");
    cartText.innerHTML = " 購物車(" + listArraylen + ")";

    //點選 表單 觸發數字改變

    let inputnum = document.querySelectorAll(".checknumber");
    inputnum[i].addEventListener("change", changeValue);
    let totalText = document.querySelectorAll(".shoopingcart-commodity-total");

    let inputvalue;

    function changeValue() {
      //改變數量 小計改變
      inputvalue = inputnum[i].value;
      localStoragePrice = listArray[i].price;
      total = parseInt(inputvalue) * localStoragePrice;
      let all = 0;

      //改變總金額
      totalText = document.querySelectorAll(".shoopingcart-commodity-total");
      subtotal = totalText[i];
      subtotal.innerHTML = "NT" + total;

      let len = totalText.length;
      for (let a = 0; a < len; a++) {
        all += parseInt(inputvalue) * listArray[i].price;
        TotalcartMoney.innerHTML = all;
        PayMoney.innerHTML = all + 30;
      }

      listArray[i].qty = parseInt(inputvalue);
      let sentlist = JSON.stringify(listArray);
      localStorage.setItem("shoplist", sentlist);
    }
  }
}

shopListrrender();

//購物車清單數量
UserChoose();

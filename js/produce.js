


//尺寸長度的全域變數
let sizelen;

//顏色陣列長度的全域變數
let colorlen;

// 庫存陣列的長度=======================
let vlen;
let vcolorCode;
let vcolorSize;


let productTitle;
let productId;
let productPrice;

//=====================================
//將product 畫在 htlm上
function productrender(data){

productImg = data.data.main_image;

productTitle = data.data.title;

productId = data.data.id;

productPrice = data.data.price;

//顏色

//尺寸
let productNote = data.data.note;

let productTexture = data.data.texture;

let descriPtion = data.data.description;

let productPlace = data.data.place;

let productStory = data.data.story;

let productMainPhoto = data.data.main_image;

let productPhototop = data.data.images[0];

let productPhotobottom = data.data.images[1];

//======================================================================

//product-content
let productContent = document.createElement('div');
    productContent.setAttribute('class','product-content');
    
//=====================================================================
// product-top 
let productTop = document.createElement('div');
    productTop.setAttribute('class','product-top');
//======================================================================
//product-list-left
let productListLeft = document.createElement('div');
    productListLeft.setAttribute('class','product-list-left');
let productListImg = document.createElement('img');
    productListImg.setAttribute('class','product-list-img');
    productListImg.src= productMainPhoto;

//======================================================================

//product-list-right 
let productListRight = document.createElement('div');
    productListRight.setAttribute('class','product-list-right');

//product-clothes-name
let productClothesName = document.createElement('h1');
    productClothesName.setAttribute("class","product-clothes-name");
    productClothesName.textContent = productTitle;

//product-clothes-id
let productClothesId =  document.createElement('p');
    productClothesId.setAttribute("class","product-clothes-id");
    productClothesId.textContent = productId;
//product-clothes-price
let productClothesCPrice =  document.createElement('h3');
    productClothesCPrice.setAttribute("class","product-clothes-price");
    productClothesCPrice.textContent = productPrice;
//product-clothes-color-list

let productClothesColorList =  document.createElement('ul');
    productClothesColorList.setAttribute("class","product-clothes-color-list");

    let productClothesColorTitle =  document.createElement('li');
    let productClothesColorTitleText =  document.createElement('h5');
    let ColorTitle = "顏色｜";
        productClothesColorTitleText.textContent = ColorTitle;


let productClothesSizeList =  document.createElement('ul');
    productClothesSizeList.setAttribute("class","product-clothes-size-list");
    
    let ClothesSizeTitle =  document.createElement('li');
    let ClothesSizeTitleText =  document.createElement('h5');
    let SizeTitle = "尺寸｜";
        ClothesSizeTitleText.textContent = SizeTitle;
  

 
//product-clothes-Quantity
//需插入迴圈及文字
let productClothesQuantity =  document.createElement('ul');
    productClothesQuantity.setAttribute("class","product-clothes-Quantity");
    let QuantityTitle =  document.createElement('li');
    let QuantityTitleText =  document.createElement('h5');
    let Quantity = "數量｜";
        QuantityTitleText.textContent =  Quantity;


    let QuantityformBtn = document.createElement('li');
    let productClothesQuantityform = document.createElement('div');
        productClothesQuantityform.setAttribute("class","product-clothes-Quantity-form");
    
   
    let QuantityBtnLess = document.createElement('div');
        QuantityBtnLess.setAttribute("class","Quantity-btn-add");
        QuantityBtnLess.setAttribute("onclick","Add()");
        QuantityBtnLess.textContent = "+";
   
    let QuantityBtnAdd = document.createElement('div');
        QuantityBtnAdd.setAttribute("class"," Quantity-btn-less");
        QuantityBtnAdd.setAttribute("onclick","Less()");
        QuantityBtnAdd.textContent ="-";

    let QuantityInput =  document.createElement('div');
        QuantityInput.setAttribute("id","Quantity-number");
        QuantityInput.setAttribute("class","Quantity-input");

        QuantityInput.textContent=1;


//clear-fix
let clearFix = document.createElement('div');
    clearFix.setAttribute('class','clear-fix');
//clear-fix
let clearFixTop = document.createElement('div');
    clearFixTop.setAttribute('class','clear-fix');
    
//product-cart-btn-div
let productCartBtnDiv = document.createElement('div');
    productCartBtnDiv.setAttribute('class','product-cart-btn-div');
    
    //product-cart-btn

    let productCartBtn = document.createElement('div');
        productCartBtn.setAttribute('class','product-cart-btn');
        productCartBtn.setAttribute('onclick','addCart()');
    let CartBtnText = "加入購物車";
        productCartBtn.textContent = CartBtnText;


//product-clothes-detail
let productClothesDetail = document.createElement('div');
    productClothesDetail.setAttribute('class','product-clothes-detail');

    let DetailTitle = document.createElement('div');
        DetailTitleP = document.createElement('p');
        DetailTitleP.textContent = productNote;

    let DetailText = document.createElement('div');
        DetailTexture = document.createElement('p');
        DetailTexture.textContent = productTexture;
        DetailTextP = document.createElement('p');
        DetailTextP.textContent = descriPtion;

    let DetailPlace = document.createElement('div');
        DetailPlaceP = document.createElement('p');
        DetailworkingP = document.createElement('p');
    let PlaceText = "素材產地 /" + productPlace;
    let workingP ="加工產地 /" + productPlace;
        DetailPlaceP.textContent = PlaceText;
        DetailworkingP.textContent = workingP;


 // product-content 
let productCenter = document.createElement('div');
    productCenter.setAttribute('class','product-content');

    //product-center-title
    let productCenterTitle = document.createElement('div');
        productCenterTitle.setAttribute('class','product-center-title'); 
        
    //product-center-content
    let productCenterContentTop = document.createElement('div');
        productCenterContentTop.setAttribute('class','product-center-content-top'); 
        productCenterContentTop.textContent = productStory;
        
    //product-center-img-top
    let productCenterImgTop = document.createElement('img');
        productCenterImgTop.setAttribute('class','product-center-img-top'); 
        productCenterImgTop.src=productPhototop;
       


    //product-center-content
    let productCenterContentBottom = document.createElement('div');
        productCenterContentBottom.setAttribute('class','product-center-content-bottom');
        productCenterContentBottom.textContent = productStory;;
    //product-center-img-Below
     
    let productCenterImgBelow = document.createElement('img');
        productCenterImgBelow.setAttribute('class','product-center-img-Below'); 
        productCenterImgBelow.src = productPhotobottom;
//====================================================================================
 
        //product-center-title 子層
        let  productCenterTitleDiv = document.createElement('div');
        let  CenterTitletext = document.createElement('h5');
        CenterTitletext.textContent = "細部說明";
        let  CenterTitleHr = document.createElement('hr');
         

        //product-center-content-top 子層
        let ContentTop = document.createElement('p');


        //product-center-img-top 子層
        //product-center-content-bottom 子層
        let ContentBottom = document.createElement('p');
        //product-center-img-Below 子層






//將元素掛在 wrap 上 =======================================
//wrap
let wrap = document.querySelector('.wrap');

    wrap.appendChild(productContent);

//將元素掛在 product-content 上 =======================================
    productContent.appendChild(productTop);
    productContent.appendChild(productCenter);

//將元素掛在 product-top 上   ==========================================
//2個
    productTop.appendChild(productListLeft );
    productTop.appendChild(productListRight);
    productTop.appendChild(clearFixTop);


//將元素掛在 product-ListLeft 上 =======================================
    productListLeft.appendChild(productListImg);


//將元素掛在 product-ListRight 上 =======================================

    productListRight.appendChild(productClothesName);
    productListRight.appendChild(productClothesId);
    productListRight.appendChild(productClothesCPrice);

    productListRight.appendChild(productClothesColorList);
    productListRight.appendChild(productClothesSizeList);
    productListRight.appendChild(productClothesQuantity);

    productListRight.appendChild(clearFix);
    productListRight.appendChild(productCartBtnDiv);
    productListRight.appendChild(productClothesDetail);


//將元素掛在 product-ListRight 子層上 =======================================

//product-clothes-size-list
productClothesSizeList.appendChild(ClothesSizeTitle);

ClothesSizeTitle.appendChild(ClothesSizeTitleText);


//product-clothes-Quantity
//子層 2個
productClothesQuantity.appendChild(QuantityTitle);
productClothesQuantity.appendChild(QuantityformBtn);

//
QuantityTitle.appendChild(QuantityTitleText);
QuantityformBtn.appendChild(productClothesQuantityform);

//product-clothes-Quantity-form
productClothesQuantityform.appendChild(QuantityBtnAdd);
productClothesQuantityform.appendChild(QuantityInput);
productClothesQuantityform.appendChild(QuantityBtnLess);


//product-cart-btn-div

productCartBtnDiv.appendChild(productCartBtn);

//product-clothes-detail
productClothesDetail.appendChild(DetailTitle);

productClothesDetail.appendChild(DetailText);
productClothesDetail.appendChild(DetailPlace);


DetailTitle.appendChild(DetailTitleP);
DetailText.appendChild(DetailTexture);
DetailText.appendChild(DetailTextP);
DetailPlace.appendChild(DetailPlaceP);
DetailPlace.appendChild(DetailworkingP);



//將元素掛在 product-content 上 =======================================

productCenter.appendChild(productCenterTitle);
productCenter.appendChild(productCenterContentTop);
productCenter.appendChild(productCenterImgTop);
productCenter.appendChild(productCenterContentBottom);
productCenter.appendChild(productCenterImgBelow);

//將元素掛在 product-content 子層上 =======================================

//product-center-title
productCenterTitle.appendChild(productCenterTitleDiv);
productCenterTitle.appendChild(CenterTitleHr);
productCenterTitleDiv.appendChild(CenterTitletext);

//product-center-content-top
productCenterContentTop.appendChild(ContentTop);
//product-center-content-bottom
productCenterContentBottom.appendChild(ContentBottom);

  
let productClothesSize
//產品的尺寸
    sizelen = data.data.sizes.length;
for(let s=0; s<sizelen ;s++ ){
    let size= data.data.sizes[s] ;
//console.log(size)
    
    productClothesSize =  document.createElement('li'); 
    productClothesSize.setAttribute("class","product-clothes-size");
    productClothesSize.setAttribute("onclick","sizeChoose("+s+")");
    productClothesSize.setAttribute("size",size);
    productClothesSize.textContent = size;
    productClothesSizeList.appendChild(productClothesSize);

}  



// //產品的顏色

let Colortext=''
    colorlen = data.data.colors.length;
//console.log(colorlen)
for(let c=0;c<colorlen;c++){  
    let colorCode= data.data.colors[c].code;
    let colorName= data.data.colors[c].name;
    Colortext += "<li class='product-clothes-color'color='"+ colorCode + "'colorname='" + colorName + "' ><div style='background:#" + colorCode + " 'onclick='colorChoose("+c+")'></div><li>";

} ;
    productClothesColorList.innerHTML =   "<li><h5>顏色｜</h5></li> " + Colortext;


// //============從 物件裡面撈出 資訊======================================

//庫存物件 的陣列
vlen = data.data.variants;

productUserChoose = data.data;

//將預設點擊事件帶入
sizeChoose(0);
colorChoose(0);

//購物車內的訂單數字

UserChoose();

}

//========產品選單按鈕設置========================================================================

//=======點取衣服顏色按鈕===============================================

//點擊的 顏色事件---取得顏色的資料

//變數 v 為指定監聽物件的陣列數字
//變數 c 為原本撈出物件長度的迴圈

let gitColor;//使用者點選的顏色
let gitColorName;//使用者點選的顏色名稱

function colorChoose(c){
let checkColor = document.querySelectorAll('.product-clothes-color');
 //觸發事件時 讓數字為1
let num= document.getElementById('Quantity-number');
    num.innerHTML = 1;

 //為顏色加上css 樣式 
for(let v=0;v<colorlen;v++){
    checkColor[v].classList.remove('product-clothes-color-click')
    };

    checkColor[c].classList.add('product-clothes-color-click');
    gitColor = checkColor[c].getAttribute('color');
    gitColorName = checkColor[c].getAttribute('colorname');

    variantsCheck ();
};


//=======點取衣服尺寸按鈕===================================================

//設定 尺寸的監聽事件

//點擊 尺寸事件 撈出尺寸的數字
//變數 z 為指定監聽物件的陣列數字
//變數 s 為原本撈出物件長度的迴圈

let getSize; //使用者點選的尺寸

function sizeChoose(z){
    let checkSize = document.querySelectorAll('.product-clothes-size');

 //觸發事件時 讓數字為1
    let num= document.getElementById('Quantity-number');
        num.innerHTML = 1;

 //為尺寸加上Class   
    for(let s=0; s<sizelen ;s++){
        checkSize[s].classList.remove('product-clothes-size-click');
        };
        checkSize[z].classList.add('product-clothes-size-click');
        getSize =checkSize[z].getAttribute('size');
        variantsCheck ();

} 



//=====================庫存顏色及尺寸==================================

//點選顏色及尺寸 吐出相對應的庫存
let variantsTotal;//最終算出的庫存值



function variantsCheck (){

let num = vlen.length;

for(let n=0;n<num;n++){
   
    let vcolorCode = vlen[n].color_code;
    let vcolorSize = vlen[n].size;


    if ( gitColor  == vcolorCode && vcolorSize == getSize){

        let bar = document.querySelector('.product-clothes-Quantity-form');
        let less=document.querySelector('.Quantity-btn-less');
        let add=document.querySelector('.Quantity-btn-add');
            bar.classList.remove('disable-count');    
            less.setAttribute("onclick","Less()");
            add.setAttribute("onclick","Add()");
            //點選商品的庫存數量
            variantsTotal = vlen[n].stock;

    if( vlen[n].stock== 0 ){
        let num= document.getElementById('Quantity-number');
            num.textContent ="缺貨中";
        //增加無法點擊的背景
            bar.classList.add('disable-count');
        //如果沒有庫存解除點擊事件
            less.removeAttribute("onclick");
            add.removeAttribute("onclick");
            return ;
    };



}
    if( gitColor == undefined ||  getSize == undefined  ){
       return ;
    }

}
}


//=====================按鈕點選=======================================


//================加法==============================================

    function Add(){
  
        let num= document.getElementById('Quantity-number');
            addnumber = parseInt( num.innerHTML) +1;
            num.textContent = addnumber;
        if( addnumber >= variantsTotal ){
            num.textContent = variantsTotal;
        };
    };

//================減法==============================================
 
    function Less(){
        let num= document.getElementById('Quantity-number');
            lessnumber = parseInt(num.innerHTML) -1 ;
            num.textContent = lessnumber;
        if(lessnumber<1 ){
            num.textContent = 1;
        };
    };
//==================================================================


//8/04----本來開啟的UserChoose() 後來修改將他關上

//================= 創立local storage 把資料放上去=====================================================

//建一觸發購物車 的按紐 事件

//使用者點擊的數量
    // let getCount;
    // function UserChoose(){
    // //取出 localStorage 的資料筆數
    //     let getlist;
    //         getlist = JSON.parse(localStorage.getItem('shoplist')).length;

    //     let cartcount = document.querySelectorAll('.cart-list-conut');
    //     let len = cartcount.length;
    
    //     for( let i =0 ;i<len;i++ ){
    //         cartcount[i].textContent = getlist;
    //     }

    // }

//========================================================

// //取出 localStorage 的資料筆數

    let listArray;
    let shoplist;
    let list;
    let text;

//====使用者選取的值
    let choseSize; 
    let choseColor;
    let choseID;
    let sentlist;
   
    function addCart (){
        getCount= document.getElementById('Quantity-number').innerHTML  
        if ( localStorage.getItem('shoplist') === null ) {
            listArray = [];
            localStorage.setItem('shoplist', JSON.stringify(listArray));
        } else {
            listArray = JSON.parse(localStorage.getItem('shoplist'));
        }; 

        //判斷產品是否購買過==========================================
 
    //=========判斷是否重複============================================================

    let listlen=listArray.length;
    let repeat=false;
    //console.log(variantsTotal)

 
    for(let i =0 ;i<listlen;i++){
        choseSize = listArray[i].size;
        choseColor = listArray[i].color.code;

        choseID = listArray[i].id ;  

        if( getSize === choseSize && gitColor === choseColor &&  productId === choseID ){
           repeat=true; 
           let add =  parseInt(listArray[i].qty) + parseInt(getCount);

        if( add >= variantsTotal ){
            add = variantsTotal;
        };
        let total=add.toString();
            listArray[i].qty = total;
        };
        
    }
    if( repeat!==false ){
    
        let sentlist =JSON.stringify(listArray);
        localStorage.setItem('shoplist',sentlist);

    }else{
        list= 
        {
        "id": productId,
        "name":productTitle ,
        "price": productPrice,
        "variants":variantsTotal,
        "Img":productImg,
        "color": {
            "code":gitColor,
            "name": gitColorName
            
        },
        "size":getSize,
        "qty":parseInt(getCount),
        }
        listArray.push(list);  
        let sentlist =JSON.stringify(listArray);
        localStorage.setItem('shoplist',sentlist);    
    }
    //執行按鈕增加數字
    UserChoose();
}   

//===================================================================================================

//product頁 api 資料連結

//====== 取出網址後夾帶的id===========================================================================

    let imgIdstring = location.href;
//將字串轉成url
    let url = new URL(imgIdstring);

//找到id後方的字串
    let getUrlString = url.searchParams.get('id');

//========抓取 product page 事件的連結位置==============================================================    

    function  productAjax(text){
        let productApi="https://api.appworks-school.tw/api/1.0/products/details?id="+text;
        return productApi;
    };
 

   ajax(productAjax(getUrlString), function(response)
   {    productrender(response);

   }); 





   //=====================
   //       搜尋列
   //=====================


   let searchvalue
   let searchBtnWeb = document.querySelector('.search-btn-web');
    searchBtnWeb.addEventListener('click',searchContentWeb,false);

   function searchContentWeb(e){
    e.preventDefault();
     //抓到網址的query string
     //document.location.href="index.html"; 
     
     //https://[HOST_NAME]/api/[API_VERSION]/products/search?keyword=洋裝
     
    //let searchString = location.href;
     //將字串轉成url
    //let searchUrl = new URL(searchString);
     //找到id後方的字串
    //searchvalue = searchUrl.searchParams.get('id');
    
    //選定id事件
    let searchText = document.querySelector('#searchText-web');
    //撈到使用者的輸入
    let textvalue =searchText.value;
    console.log(textvalue)
    
    document.location.href="index.html";
    console.log(location.href)  
    console.log("1")
    //點選連結 
    function ajaxLine(textinput){
        let linktext = "https://api.appworks-school.tw/api/1.0/products/search?keyword=" +textinput
        console.log(linktext)
        return linktext;
      
     };
     console.log("2")
    //重新放上新標籤

    console.log(location.href)
    let text = document.querySelector('.index-content-width');
    console.log(text)
    let str = "<ul class='card-list' id='contentScroll'></ul>";
    console.log(str)
    console.log(location.href) 
    text.innerHTML=str;
    
    ajax(ajaxLine(textvalue), function(response)
    { render(response);
        
    }); 
    console.log(location.href) 
    };
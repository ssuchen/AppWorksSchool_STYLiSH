


//傳給token的物件
let TokenArray;

// 處理各種登入資料
function statusChangeCallback(response) {
let name = document.getElementById("userName");
let photo = document.getElementById("userPic");
let email =  document.getElementById("userMail");
let text = document.querySelector('.text');


//=====判斷使用者是否加入會員=======================

// 登入 FB 且已加入會員
if (response.status === 'connected') {
  
FB.api('/me?fields=id,name,email,picture.type(large)', function(response) {

text.innerHTML = "已登入 FB";
name.innerHTML =  response.name

photo.setAttribute('src',response.picture.data.url)
photo.classList.remove('userNone')
email.innerHTML = response.email

//將使用者的token傳至localstorage
addToken ();

});
}
// 未登入 FB
//window.location.reload()
else {

if(localStorage.userToken !== undefined){
   localStorage.removeItem('userToken')//刪除 localStorage上的Token資訊  
}    

text.textContent = "未登入 FB"
photo.classList.add('userNone')

name.classList.add('userNone')
email.classList.add('userNone')

};

//================================================

//抓出 authResponse.accessToken
let userToken = response.authResponse.accessToken;

//創造一個local storage 的 key 為userToken

//創造一個陣列來放置token資料
function addToken (){
    TokenArray = [];
    if (localStorage.getItem('userToken') === null) {
        TokenArray = [];
        localStorage.setItem('userToken', JSON.stringify(TokenArray));
    } else {
       // TokenArray = JSON.parse(localStorage.getItem('userToken'));
       return;
    } 

    //存放local storage 的物件
    let Tokenlist = 
    {
    "access_token":userToken
    };

    //將物件放入陣列 並將格式字串化 送至localstorage
    TokenArray.push(Tokenlist);
    let sentlist = JSON.stringify(TokenArray);
    localStorage.setItem('userToken', sentlist);
    
   };

};

//將token從localstorage 裡取出

function checkLoginState() {
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    });
    };


//fb 登入 設定  
window.fbAsyncInit = function() {
    FB.init({
    appId: '350480895829358', // 填入 FB APP ID
    cookie: true,
    xfbml: true,
    version:'v4.0'
    });
    
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    });
    };
    
    

// 載入 FB SDK
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s);
js.id = id;
js.src = "https://connect.facebook.net/zh_TW/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));























































//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '350480895829358',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v4.0'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

// //在頁面載入時用來檢查用戶登入狀態所執行的部分程式碼


//    FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });


// //提供給回呼的 response 物件含有數個欄位

// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }


// let userIcon = document.querySelector('.member-icon')
// let userphoneIcon = document.querySelector('.member-mobile-icon')

// userIcon.addEventListener('click', userBtn)
// userphoneIcon.addEventListener('click',userBtn)


// function userBtn(){

// alert("123")

    
// }


//<fb:login-button scope="public_profile,email" autologoutlink="true" onlogin="checkLoginState();"></fb:login-button>



//----------------------------------------------------------------------
//目前狀態：<span id="FB_STATUS_1"></span>
// window.fbAsyncInit = function() {
//     FB.init({
//     appId: '350480895829358', // 填入 FB APP ID
//     cookie: true,
//     xfbml: true,
//     version: 'v4.0'
//     });
    
//     FB.getLoginStatus(function(response) {
//     statusChangeCal lback(response);
//     });
//     };


//    // scope="mail" 

// //user_photos

// // 處理各種登入身份
// function statusChangeCallback(response) {
// console.log(response);
// //{scope: 'email'}
// // console.log(email)
// // console.log(scope)

// let name = document.getElementById("userName")
// let photo = document.getElementById("userPic")
// let email =  document.getElementById("userMail")
// let text = document.querySelector('.text')
// text = "";

// // 登入 FB 且已加入會員
// if (response.status === 'connected') {
// text = "已登入 FB";

// FB.api('/me?fields=id,name,picture.type(large),email', function(response) {
    
// console.log(response);

// name.innerHTML =  response.name
// console.log(name)
// photo.innerHTML =  response.user_photos
// console.log(photo)
// email.innerHTML = response.email
// console.log(email)

// photo.classList.remove('userPhotonone')

// //user_photos

// // html += "會員暱稱：" + response.name + "<br/>";
// // html += "會員 email：" + response.email;
// // target.innerHTML = html;
// });
// }

// else {
//     text.innerHTML = "未登入 FB";
//     photo.classList.add('userPhotonone')
// }
// }

// function checkLoginState() {
// FB.getLoginStatus(function(response) {
// statusChangeCallback(response);
// });
// }

// // 載入 FB SDK
// (function(d, s, id) {
// var js, fjs = d.getElementsByTagName(s)[0];
// if (d.getElementById(id)) return;
// js = d.createElement(s);
// js.id = id;
// js.src = "https://connect.facebook.net/zh_TW/sdk.js";
// fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
 


//===========tappay 資料綁定事件===============================



TPDirect.setupSDK(12348,"app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF","sandbox");


var fields = {
    number: {
        // css selector
        element: '#card-number',
        placeholder: '**** **** **** ****'
    },
    expirationDate: {
        // DOM object
        element: document.getElementById('card-expiration-date'),
        placeholder: 'MM / YY'
    },
    ccv: {
        element: '#card-ccv',
        placeholder: '後三碼'
    }
};


TPDirect.card.setup({
    fields: fields,
    styles: {
        // Style all elements        
        'input': {
            'color': 'gray'
        },
        // Styling ccv field
        'input.cvc': {
            // 'font-size': '16px'
        },
        // Styling expiration-date field
        'input.expiration-date': {
            // 'font-size': '16px'
        },
        // Styling card-number field
        'input.card-number': {
            // 'font-size': '16px'
        },
        // style focus state
        ':focus': {
            // 'color': 'black'
        },
        // style valid state
        '.valid': {
            'color': 'green'
        },
        // style invalid state
        '.invalid': {
            'color': 'red'
        },
        // Media queries
        // Note that these apply to the iframe, not the root window.
        '@media screen and (max-width: 400px)': {
            'input': {
                'color': 'orange'
            }
        }
    }
});

TPDirect.card.getTappayFieldsStatus();
//=============================================================
let buybtn = document.querySelectorAll('.totalcart-btn');
let buybtnlen = buybtn.length;
for(let i=0 ;i<buybtnlen;i++){
   buybtn[i].addEventListener('click',onSubmit);
};

//=============================================================
//=======表單資訊檢驗

function onSubmit(event) {
    event.preventDefault();
    
        
//重新抓 總價資料 
    listArray = JSON.parse(localStorage.getItem('shoplist'));
    listArraylen =listArray.length;
    

    let userName = document.querySelector(".userName");//使用者名子
    let userPhone = document.querySelector(".userPhone"); //使用者電話
    let userAddress = document.querySelector(".userAddress"); //使用者住址

    let userCity = document.querySelector(".list-city");//運送地址
    let userPay =  document.querySelector(".list-pay");//付款方式

    let getName = userName.value;//使用者名子
    let getphone = userPhone.value;//使用者電話
    let getAddress = userAddress.value;//使用者住址
    let getCity = userCity.value;//運送城市
    let getPay = userPay.value;//付款方式
    let getTotal; //總價
    let getTime; //使用者時間
    
       

    //取得最終價錢
    for(let i=0;i<listArraylen;i++){
       let price= listArray[i].price;
       let qty = parseInt(listArray[i].qty);
       getTotal = parseInt(price) * parseInt(qty);
    };
    let getPayTotal = getTotal + 30 ;// 含運價

    //取得時間
    let userTime = document.querySelectorAll(".choesstime")
    for(let c=0;c<userTime.length;c++){
    if( userTime[c].checked == true){
        getTime = userTime[c].value
    };
    };
    let userPrime
        // 取得 TapPay Fields 的 status
        const tappayStatus = TPDirect.card.getTappayFieldsStatus();
    
        // 確認是否可以 getPrime
        if (tappayStatus.canGetPrime === false) {
            alert('信用卡資訊有誤');
            return;
        }
        if(getName == ""|| getphone == ""|| getAddress == "" || getTime == undefined){
            alert("請完整訂購資料");
            return;
        };


       
        // Get prime
        TPDirect.card.getPrime((result) => {
            if (result.status !== 0) {   
              alert('訂單還未填寫完成');
              return;
            };
              alert('訂單已順利送出');
              userPrime = result.card.prime;
            //====刪除多餘的物件格式
             function changeArray(){

             for(let s = 0;s<listArraylen;s++){
             delete listArray[s].variants;
             delete listArray[s].Img;
            };
            };
            changeArray();    
            //要送出去的local 的表單
            order =
            {
            "prime": userPrime,
            "order": 
            {
            "shipping":getCity,
            "payment": getPay,
            "subtotal":getTotal,
            "freight":30,
            "total":getPayTotal,
            "recipient": 
            {
            "name":getName,
            "phone":getphone,
            "email":"luke@gmail.com",
            "address":getAddress ,
            "time": getTime,
            },
            "list": listArray                  
            }
            }

            //將資料送往資料庫

           // 從localstorage裡撈  token資料

        TokenArray = JSON.parse(localStorage.getItem('userToken'));
            //TOKEN 字串
           let getToken 
           if( getToken == null){
           getToken = 0 ;
           }else{
            getToken = TokenArray[0].access_token;
           }

           let orderNumber ;      
           let json = JSON.stringify(order);//將物件轉成字串格式
                
        function postajax(src,callback){ 
            //如果使用者沒有登錄
            if(localStorage.userToken === undefined){
                let xhr= new XMLHttpRequest();
                xhr.open('post',src,true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload=function(){
                callback(JSON.parse(xhr.responseText));
                } ;
                xhr.send(json);      

            }else{
            //如果使用者有登錄
               let xhr= new XMLHttpRequest();
               xhr.open('post',src,true);
               xhr.setRequestHeader("Content-Type", "application/json");
               xhr.setRequestHeader("Authorization", "Bearer" + getToken);
               xhr.onload=function(){
               callback(JSON.parse(xhr.responseText));
               } 
               xhr.send(json)  ;
            };
        };

        let postlink = "https://api.appworks-school.tw/api/1.0/order/checkout";
       
            postajax(postlink, function(response)
            { linkrender(response);   
            });

        let orderid
            function linkrender(data){
                localStorage.removeItem('shoplist');//刪除 localStorage上的訂單資訊
                orderid = data.data.number;//訂單編號
                window.location.assign("thankpage.html?id="+ orderid);
            };
           
        }
        )  
} ;   
    


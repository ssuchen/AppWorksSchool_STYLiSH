
    alert("訂購完成,感謝您的消費");
//抓到網址的query string    
    let orderIdstring = location.href;
//將字串轉成url
    let orderurl = new URL(orderIdstring);
//找到id後方的字串
    let getOrderUrlString = orderurl.searchParams.get('id');
    let userOrderNum = document.querySelector('.order-number');
        userOrderNum.innerHTML = getOrderUrlString;
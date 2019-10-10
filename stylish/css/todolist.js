


//====7/23==================================================

//week 2 part 4 

//===========1.  創立local storage 把資料放上去=====================

//設定 一個空的 local storage {} {(api 文件) ----ok

//如果有這個命名的 放入 如果是null 創造一個 setItem('list') ---ok

//獲取點選資料 顏色 尺寸 及數量 ----ok

//建立監聽事件 將資料點選完成後 按購物車按鈕 可送出資訊

//創建一個物件  localstorage名稱.push  將物件放上local storage的物件中--OK

// 將物件全部放入 最外層的物件 後 轉成 jason 格式   JSON.stringift  ---ok

//將處理好的字串 用setItem('list') 放上 local storage  ---ok


//假設 local storage {} 裡面的資訊是空 清除 localstorage
// localStorage.removeItem('image');

//===============2. 購物車點選 獲得資料筆數 ====================

//  購物車點選時數量增加

//  購物車 css ----ok

// 設定元素 將 localStorage 的資料筆數 放上購物車頁面



    // "list": [
    //     {
    //       "id": [Product ID],
    //       "name": [Product Name],
    //       "price": [Product Unit Price],
    //       "color": {
    //         "name": [Product Variant Color Name],
    //         "code": [Product Variant Color HexCode]
    //       },
    //       "size": [Product Variant Size],
    //       "qty": [Quantity]
    //     },
    //     ...
    // ]







//閉包
//target // currrntTarget

//hoisting 提升 (js特性)
//lint tool :ESLint

//function 名稱 建議動詞開頭
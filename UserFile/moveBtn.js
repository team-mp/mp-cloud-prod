function settingMoveBtn() {
    
    //クラス名から要素を取り出し	
    const targetdiv = document.getElementsByClassName( "moveBtn" ) 	
    if(targetdiv.length===0){	
        console.log("settingMoveBtn 対象なし");	
        return;	
    }	

    //親の要素を取り出し	
    const element1 = targetdiv[0].parentElement;	
    //親2	
    const element2 = document.getElementById( "placeHolderDiv" );
    let ele2width = element2.style.width;	
    //親3　centerDiv_XXX	
    const element3 = element2.parentElement;	
    let ele3width = element3.style.width;	

    //maxwideに値がある場合はmaxwideを設定
    if(element3.style.maxWidth !== ""){
        ele3width = element3.style.maxWidth;
    }
    if(element2.style.maxWidth !== ""){
        ele2width = element2.style.maxWidth;
    }
        
    //対象の要素にスタイルを設定する	
    for(let i = 0; i < targetdiv.length; i++){	
        const mywidth = parseInt(targetdiv[i].style.width);
        const myleft = parseInt(targetdiv[i].style.left);
        //初期の位置を計算してrightを設定
        targetdiv[i].style.right = parseInt(ele2width) - myleft - mywidth + 'px';
        targetdiv[i].style.left = "";
    }	
    //親、親2、親3の要素にスタイルを設定する	
    element1.style.width = "100%";
    element2.style.width = "100%";	
    element2.style.maxWidth = ele2width;	
    element3.style.width = "100%";	
    element3.style.maxWidth = ele3width ;	
}

//コンテナーを使用した画面でのボタン固定設定
function settingMoveBtnForContainer(btnName) {
    
    //クラス名から要素を取り出し	
    const targetdiv = document.getElementsByClassName( btnName );
    if(targetdiv.length===0){	
        console.log("settingMoveBtn 対象なし");	
        return;	
    }	

    //親の要素を取り出し	
    const element1 = targetdiv[0].parentElement;
    //親4	
    const element4 = element1.parentElement.parentElement.parentElement;
    //親5	
    const element5 = element4.parentElement;
    //親6	
    const element6 = document.getElementById( "placeHolderDiv" );
    let ele6width = element6.style.width;	
    //親7 centerDiv_XXX	
    const element7 = element6.parentElement;	
    let ele7width = element7.style.width;	

    //maxwideに値がある場合はmaxwideを設定
    if(element7.style.maxWidth !== ""){
        ele7width = element7.style.maxWidth;
    }
    if(element6.style.maxWidth !== ""){
        ele6width = element6.style.maxWidth;
    }
        
    //対象の要素にスタイルを設定する	
    for(let i = 0; i < targetdiv.length; i++){	
        const mywidth = parseInt(targetdiv[i].style.width);
        const myleft = parseInt(targetdiv[i].style.left);
        //初期の位置を計算してrightを設定
        targetdiv[i].style.right = parseInt(ele6width) - myleft - mywidth + 'px';
        targetdiv[i].style.left = "";
    }	
    //親、親2、親3の要素にスタイルを設定する	
    element1.style.width = "100%";
    element4.style.width = "100%";
    element5.style.width = "100%";
    element6.style.width = "100%";	
    element6.style.maxWidth = ele6width;	
    element7.style.width = "100%";	
    element7.style.maxWidth = ele7width ;	
}


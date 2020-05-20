//show and hide for top nav of mobile screen
function showHide(){
    var dropDownContent, nav2, suitcase;
    dropDownContent = document.getElementById("dropDownContent");
    nav2 = document.getElementById("nav2");
    suitcase = document.getElementById("suitcase");
    
    if(dropDownContent.style.display === "none"){
        dropDownContent.style.display = "block";
        dropDownContent.style.display = "flex";
        nav2.style.backgroundColor = "black";
        suitcase.style.visibility = "hidden"
    }
    else{
        dropDownContent.style.display = "none";
        nav2.style.backgroundColor = "";
        suitcase.style.visibility = "";
    }
}


//show and hide Shop and Learn
function showNhideShopLearnCon(){
    var shopLearnCon;
    shopLearnCon = document.getElementById("shopLearnCon");
    
    if(shopLearnCon.style.display === "none"){
        shopLearnCon.style.display = "block";
    }
    else{
        shopLearnCon.style.display = "none";
    } 
}


//show and hide Service
function showNhideConServices(){
    var serviceAccountCon;
    serviceAccountCon = document.getElementById("serviceAccountCon");
    
    if(serviceAccountCon.style.display === "none"){
        serviceAccountCon.style.display = "block";
    }
    else{
        serviceAccountCon.style.display = "none";
    }
}
//show and hide Accounts
function showNhideConAccount(){
    var AccountCon;
    AccountCon = document.getElementById("AccountCon");
    
    if(AccountCon.style.display === "none"){
        AccountCon.style.display = "block";
    }
    else{
        AccountCon.style.display = "none";
    }
}



//show and hide App Store
function showNhideAppStore(){
    var appStore;
    appStore = document.getElementById("appStore");
    
    if(appStore.style.display === "none"){
        appStore.style.display = "block";
    }
    else{
        appStore.style.display = "none";
    }
}

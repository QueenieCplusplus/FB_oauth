// 2020, 7/14, pm 1:00 - 2:00
// JS
// FB login

// Initialization
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{app id}',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.12'
    });
    //記錄用戶行為資料 可在後台查看用戶資訊
    FB.AppEvents.logPageView();   
  };


// JS to HTML DOM
//embeded fb sdk
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk')); // (DOMnode, property, value)
 


   // login button onClick
  $(function() {

    $("#login").click(function() {


      FB.getLoginStatus(function(re) {

       
        if (res.authResponse) {
          
            // call fb api
          FB.api('/me',{fields: 'id,name,email'}, function (res) {
          });

        } else {

          //call FB.login() ask for open auth
          FB.login(function (res) {
            if (res.authResponse) {
              FB.api('/me',{fields: 'id,name,email'}, function (res) {
              });
            }
            //FB.login()預設只會回傳基本的授權資料
            //如果想取得額外的授權資料需要另外設定在scope參數裡面          
          }, { scope: 'email,user_likes' });

        }
      });
    });
  });

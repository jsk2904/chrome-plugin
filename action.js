//when i click on my button


    // setInterval(function(){

      document.getElementById("err_msg").setAttribute("style","display:block")
      document.getElementById("form_filler").setAttribute("style","display:none")

      chrome.storage.local.remove(["token"],function(){
              var error = chrome.runtime.lastError;
                 if (error) {
                     console.error(error);
                 }
             })

       var Extracted_token_Api = ""
       var Extracted_token_storage = ""
      chrome.tabs.executeScript({
        file: 'extractor.js'
       });

        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              Extracted_token_Api = request.greeting







              chrome.storage.sync.get("token", function(obj) {
                console.log(obj);
                Extracted_token_storage = obj["token"]
               });


              if(Extracted_token_Api!=" " || Extracted_token_Api != "" )//
                 Check_Implement(Extracted_token_Api)
              if(Extracted_token_storage!="" || Extracted_token_storage!=" ")
                 Check_Implement(Extracted_token_storage)
              console.log("chrome Api calling the function ...........................")
        });






       
       
       function Check_Implement(token){

        console.log("inside token function..............................................................")
        console.log(token)
           

            console.log("On the top of check Implement.............................................")
            //This is to display form filler content and remove the error message from extension

            document.getElementById("err_msg").setAttribute("style","display:none")
            document.getElementById("form_filler").setAttribute("style","display:block")

          
            console.log("above chrome storage.....................................................................")
             //Set key value pair in local storage
             chrome.storage.sync.set({'token': token}, function() {  //...............................CHROME_STORAGE...........................................
              console.log('Settings saved');
            }); 
            console.log("below chrome storage..............................................................................")

            //This is to load form filler script in case we get token
                console.log("here above fill_form")
                fill_form(token)

              //  setTimeout(()=>{
              //     // console.log(token)
              //      document.getElementById("err_msg").setAttribute("style","display:block")
              //      document.getElementById("form_filler").setAttribute("style","display:none")
              //      Extracted_token = ""
              //      chrome.storage.local.remove(["token"],function(){
              //       var error = chrome.runtime.lastError;
              //          if (error) {
              //              console.error(error);
              //          }
              //      })
              //   },10000)

          // 






        }











        function fill_form(token){
          
           console.log(token)
          document.getElementById('fillForm').addEventListener('click', function(){
              
               
            var intValue = document.getElementById('apivalue').value;


           chrome.tabs.executeScript({
               //send the value to be used by our script
               code: `var value = ${intValue};var token = ${token};`


           }, 
           function() {
               //run the script in the file injector.js
               chrome.tabs.executeScript({
                   file: 'injector.js'
               });
           });





           });


        }
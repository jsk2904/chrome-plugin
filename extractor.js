data = document.cookie

console.log("hello injector.js")
// console.log("inside console")
// console.log(data)
// console.log(typeof data)
cookies_data = [data.split(';')]
// console.log(cookies_data)
to = ""
for(i of cookies_data[0]){
     temp = i.split("=")
    //  console.log(temp)
    //  console.log(temp[0] , typeof temp[0])
    temp[0] = temp[0].trim()

    if(temp[0] === "token"){
        to = temp[1]
        // console.log(temp[1])
    }
}
// console.log(to)


// setInterval(function(){

// console.log(to)
    chrome.runtime.sendMessage({greeting:to}, function(response) {
        
      });


// },3000);

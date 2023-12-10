const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies (cookies) {
  
// Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let result = "";
    cookies.forEach((cookie) => {
      result += `<strong> <h2> ${cookie["name"]} <br> <br> </strong> </h2>`;
    })
    document.body.innerHTML = `${result} <br>`;
  }, 1000)
}

//Progression 3: Create a function to creat cookies
// use setTimeout() -- use 2000 units for time parameter
function createCookies (newCookie, mycallback) {
  setTimeout(() => {
    cookies.push(newCookie)
    mycallback(cookies);
  }, 2000)
}
// Progression 4: calling functions

// getCookies(cookies);
createCookies(newCookie, getCookies);
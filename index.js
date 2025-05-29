// You are building a system that sends email reminders to users 5 seconds after they register. Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.


// pseudocode
// Create a function that takes in email as the parameter
// Create a promise to resolve after 5 second 
// Use setTimeout to simulate the delay that awaits 5 second
// After resolving the Promise,send a reminder message to each email.
// Create a list to store the 3 emails from 3 users.
// Loop through the list using forEach loop to send the email.


 
 
async function sendReminder(email) {
    await new Promise(resolve => setTimeout(resolve,5000));

   console.log(`Reminder sent to ${email}`) 
}

const users = ["mangaramuor@gmail.com","maniazakaria@gmail.com","amuormangar@gmail.com"]
users.forEach(email =>{
    sendReminder(email);
})

// You want to simulate a login system that tries to log in a user. The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises. Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.


 function tryLogin(){
    let attempts = 1;
 return new Promise((reject,resolve) =>{
 const  loginAttempt = ()=>{
    attempts++;
    console.log(`${attempts}`)
    setTimeout(()=>{
        if(attempts < 3){
            reject("Login attempt fail")
            loginAttempt();
        }else{
            resolve("Login successfully");
        }
    },1000)
 };
loginAttempt();
 })
}









// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. When the countdown reaches 0, stop the interval and log "Time's up!".

// pseudocode
// define a variable to store the highest count which is 5
// define a variable for the setInterval method  to set the time interval for deplaying the count when the function is executed
// decrement the count by one 
// use if condition to give a condition that when it reaches 0,it should stop 
// and by using clearInterval() to end the process at 0.
// print out "Time is up!" to indicate the end of the countdown.

let countTimer = 5;
const timerInterval = setInterval(()=>{
    countTimer-=1
    console.log({countTimer})
    if(countTimer === 0){
clearInterval(timerInterval)
console.log("Time is up!")
    }

},1000);


// You are simulating a page that loads data in stages. Create an async function called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded". Use setTimeout inside Promises and await them in sequence.
pseudocode


function pageLoading(data){
return new Promise(resolve => setTimeout(resolve,data));
}
async function loadPage() {
    console.log("Loadng header...")
    await pageLoading (2000)
    console.log("Loadng content...")
    await pageLoading (2000)
    console.log("Loadng footer...")
    await pageLoading (1000)
    console.log("fully loaded page")
    clearInterval(pageLoading)
    
}
loadPage();


// You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.
//  pseudocode
//  Define a function call fetchPrice with a parameter Symbol
//  Create a new promise  and resolve after 2 seconds


 function fetchPrice(symbol){
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(`Price for ${symbol}`)
        },2000)
    })
 }
 async function fetchStockPrices(){
    const AAPLPrices = await fetchPrice("AAPL")
    console.log("AAPLPrices")
    const pricesGooG = await fetchPrice ("GooG")
 }









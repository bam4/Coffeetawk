//CoffeeTawk — by 'your name here' — applab, lab 1, 2018

// STATEMENTS AND ASSUMPTIONS:

// Statement #1:
// "I feel like we have a larger demand here in Shanghai,"
// Assumption: The brand could get many more customers, but can't for some reason.

// Statement #2:
// "it can take up to a minute or more just to take an order, and another 5 minutes for them to walk out the door with their beverage."
// Assumption: Explicitly stated.

// Statement #3.
// "Payment is quick, most people use AliPay or WeChat Pay."
// Assumption: The majority of people use Alipay or WeChat pay and not something else.

// Statements #4, 5, 6:
// "he order-taking process is slow, 
//our baristas are fast, 
// but they struggle to keep up with making drinks and handling customer questions."
// Assumptions: Explicitly stated.

// Statement #7:
// "and I’m sure it’s through some combination of technology and operational efficiencies"
// Assumption: The answer is not some other solution.

// Statement #8:
// " I think most people know what they want before they even walk in the store,
// Assumption: Explicitly stated.

// Statement #9:
// "What about the people who just want to walk in, grab their drink and go. "I think we’re losing that business.”
// Assumption: What about people who do not want to leave?


// PSEUDOCODE:

// START PROGRAM:

// Statement #1
// Count how many people walk by the shop.
// Count how many enter.
// Calculate the percentage that enters.

// Statement #2
// Calculate how long each customer is in the store.
// Average this number.

// Statement #3:
// Calculate which percentage uses WeChat or AliPay

// Statement #4, 5, 6
// Time each of these values.
// 


// CODE:


let customerDictionary = {"Fred":"AliPay", "Bill":"WeChatPay", "Amy":"Cash", "Joan":"Credit Card", "Don":"WeChatPay", "Luis":"WeChatPay",};

let totalCustomers = 0;
let weChatPayUsers = 0;
let aliPayUsers = 0;

let currentCustomer = "Fred";

let customers = {["Fred", "String"] }

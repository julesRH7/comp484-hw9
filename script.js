// ==========================
// Part 1: Date Display
// ==========================
var date = new Date;
var day = String(date.getDate()).padStart(2, '0');
//months are 0 based, added one to fit a 1-12 month year before possible padding
var month = String(date.getMonth()+1).padStart(2, '0');
var year = date.getFullYear();
var dateOutput = (month + "/" + day + "/" + year);

document.getElementById("dateOutput").textContent = "Today is " + dateOutput;

//part 4 if/else #1
//this tells the day by checking both month and day. Year is irrelevant for the purpose of this message
//non breaking space unicode used to separate the message from the original date display
if(month > 11 && day > 5){
    document.getElementById("dateOutput").textContent += "\u00A0\u00A0\u00A0\u00A0(So this assignment is already due... hope you turned it in)"
}
else{
    document.getElementById("dateOutput").textContent += "\u00A0\u00A0\u00A0\u00A0(So this assignment isn't due yet! Hurry!)"
}


// ==========================
// Part 2: Number Conversion
// ==========================
var num = "5";
var largeNum = "1000";
var dec = "1.2";
var literallyNum = "number";
//convert all 4 variables
var convertedNum = Number(num);
var convertedLargeNum = Number(largeNum);
var convertedDec = Number(dec);
var convertedLiterallyNum = Number(literallyNum);
//find if 4 vars are NaN
var NaNNum = Number.isNaN(convertedNum);
var NaNLargeNum = Number.isNaN(convertedLargeNum);
var NaNDec = Number.isNaN(convertedDec);
var NaNLiterallyNum = Number.isNaN(convertedLiterallyNum);
//find if 4 vars are Integers
var isIntNum = Number.isInteger(convertedNum);
var isIntLargeNum = Number.isInteger(convertedLargeNum);
var isIntDec = Number.isInteger(convertedDec);
var isIntLiterallyNum = Number.isInteger(convertedLiterallyNum);

//finalString, starting empty, takes all 16 variables and concatonates them into 1 string for the html to display
var finalString = "";
//inline html used here. Inside this div, line breaks are used to separate this string into the 4 variables
finalString = `<div>` + 
"Original:" + num +  " -> Converted:" + convertedNum + " -> isNaN:" + NaNNum + " -> isInteger:" + isIntNum
    +"<br>" + 
"Original:" + largeNum + " -> Converted:" + convertedLargeNum + " -> isNaN:" + NaNLargeNum + " -> isInteger:" + isIntLargeNum
    +"<br>" + 
"Original:" + dec + " -> Converted:" + convertedDec + " -> isNaN:" + NaNDec + " -> isInteger:" + isIntDec
    +"<br>" + 
"Original:" + literallyNum + " -> Converted:" + convertedLiterallyNum + " -> isNaN:" + NaNLiterallyNum + " -> isInteger:" + isIntLiterallyNum + `</div>`;

document.getElementById("numberConversionOutput").innerHTML = finalString;


// ==========================
// Part 3: Math & Formatting
// ==========================
var num1 = 4.99;
var num2 = 10.99;
var num3 = 3;

var costForMe = num1 + num2;
//need parens so multiplication happens last
var costForEveryone = (num1+num2)*num3;
//toFixed(0) will round to eliminate the decimal points on the argument
var costForEveryoneSimple = costForEveryone.toFixed(0);

//like above, inline html used for linebreaking
var allCosts = `<div>` + 
"Cost for me:" + costForMe +"<br>" + 
"Cost for Everyone:" + costForEveryone +"<br>" + 
"Cost for everyone simplified:"+ costForEveryoneSimple + 
`</div>`;

document.getElementById("mathOutput").innerHTML = allCosts;

//Part 4 if/else #2
if((num1+num2)*num3 > 40){
    document.getElementById("mathOutput").innerHTML += "<h3>This is a ripoff!</h3>";
}
else{
    document.getElementById("mathOutput").innerHTML += "<h3> Not a bad deal...</h3>";
}


// ==========================
// Part 4: Conditionals
// ==========================
//code written in parts 1 and 3 

// ==========================
// Extra Credit: Typeof
// ==========================
var weird = null;
var weirdNum = Math.PI;
var weirdString = " ";
var weirdZero = -0;
var weirderString = "";

//typeof(var) is used to find the type during the string concatination after each "Type:"
var foundTypes = `<div>` + 
"Value:" + weird + "\u00A0\u00A0Type:" + typeof(weird) + "<br>" + 
"Value:" + weirdNum + "\u00A0\u00A0Type:" + typeof(weirdNum) + "<br>" + 
"Value: (String with just a space)"+ weirdString + "\u00A0\u00A0Type:" + typeof(weirdString)+ "<br>" +
"Value:"+ weirdZero + "\u00A0\u00A0Type:" + typeof(weirdZero)+ "<br>" +
"Value: (empty String)"+ weirderString +"\u00A0\u00A0Type:" + typeof(weirderString) + "<br>" +
`</div>`;

document.getElementById("typeOutput").innerHTML = foundTypes;





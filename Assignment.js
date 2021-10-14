// 1. Comment Your JavaScript Code :

// will tell js to ignore the remainder of the text on the current line

/* using this we can,
 comment multiple lines 
 of codes*/

//  2. Declare javascript variables:
var myName = "RIZWAN";
console.log(myName);

// 3. Storing values with the Assingment operator:
var a;
a = 7;

// 4. Assigning the value of one variable to Another:
var a;
a = 7;
var b;
b = a;

// 5. Initializing variables with the Assignment operator:
var a = 9;

// 6. Understanding uninitialied variables:
var a = 5;
var b = 10;
var c = "I am a";

// 7. Understanding Case Sensitivity in Variables:
var someVariable;
var anotherVariableName;
var thisVariableNamelsSoLong;

// 8.Add Two Numbers with JavaScript:
var myVar = 5 + 10;
console.log(myVar)

// 9: Subtract One Number from Another with JavaScript:
var myVar = 12 - 6;
console.log(myVar)

// 10. Multiply Two Numbers with JavaScript:
var myVar = 13 * 13;
console.log(myVar)

// 11.Divide One Number by Another with JavaScript:
var myVar = 16 / 2;
console.log(myVar)

/* 12. Increment a Number with JavaScript:
i = i+1 can also be written as i++ */

/* 13.  Decrement a Number with JavaScript:
i = i-1 can also be written as i-- */

// 14. Create Decimal Numbers with JavaScript:
var myDecimal = 5.7;
console.log(myDecimal);

// 15. Multiply Two Decimals with JavaScript:
var myDecimal = 2.0 * 2.5;
console.log(myDecimal);

// 16.  Divide One Decimal by Another with JavaScript:
var myDecimal = 4.4 / 2.0;
console.log(myDecimal);

/* 17. Finding a Remainder in JavaScript:

11%3 = 2;
Math.floor(11/3) = 3(Quotient)
3*3 = 9
11-9=2 (Remainder)
*/

// 18. Compound Assignment With Augmented Addition:
var a = 5;
var b = 4;
var c = 3;
a += 1;
b += 3;
c += 12;
console.log(a);
console.log(b);
console.log(c);


// 19. Compound Assignment With Augmented Subtraction:
var a = 5;
var b = 4;
var c = 3;
a -= 1;
b -= 3;
c -= 12;
console.log(a);
console.log(b);
console.log(c);

// 20.  Compound Assignment With Augmented Multiplication:
var a = 5;
var b = 4;
var c = 3;
a *= 1;
b *= 3;
c *= 12;
console.log(a);
console.log(b);
console.log(c);

// 21. Compound Assignment With Augmented Division:
var a = 5;
var b = 4;
var c = 3;
a /= 1;
b /= 3;
c /= 12;
console.log(a);
console.log(b);
console.log(c);

// 22. Declare String Variables:
var myFirstName = "Rizwan";
var myLastName = "Shareef";

// 23.Escaping Literal Quotes in Strings:
var myStr = "I am a \"double qyoted\"string inside\"double quotes.\ "
console.log(myStr);

// 24. Quoting Strings with Single Quotes:
badStr = 'Finn responds,"Let\'s go"';

// 25. Escape Sequences in Strings:
var myStr = "FirstLine                                                                               \"SecondLine                                           \"ThirdLine\ ";

// 26. Concatenating Strings with Plus Operator:
var myStr = "This is the start." + "and This is the end."
console.log(myStr);

// 27.. Concatenating Strings with the Plus Equals Operator:
var myStr = "This is the first sentence.";
myStr += "and This is the second sentence.";
console.log(myStr);

// 28. Constructing Strings with Variables:
var myName = "Rizwan";
var myStr = "My name is " + myName + " and I am well";
console.log(myStr);

// 29.Appending Variables to Strings:
var someAdjective = "Board Infinity is ";
var myStr = "awesome!!";
someAdjective += myStr;
console.log(someAdjective);

// 30. Use Bracket Notation to Find the First Character in a String:
var firstName = "Rizwan";
var LastName = "Shareef";
var firstNameOfLastName = LastName[0];
console.log(firstNameOfLastName);

// 31. Find the Length of a String:
var firstName = "Rizwan";
var LastName = "Shareef";
console.log(LastName.length);

// 32. Understand String Immutability:
var myStr = "job";
myStr = "Hello world";
console.log(myStr);

// 33.Use Bracket Notation to Find the Nth Character in a String:
var firstName = "Ada";
var thirdLetterOfLastName = firstName[2];
console.log(thirdLetterOfLastName);

// 34.Use Bracket Notation to Find the Last Character in a String:
var LastName = "Shareef";
var lastCharacter = LastName[LastName.length - 1];
console.log(lastCharacter);

// 35.Use Bracket Notation to Find the Nth-to-Last Character in a String:
var LastName = "Shareef";
var secondToLastLetter = LastName[LastName.length - 2];
console.log(secondToLastLetter);

// 36. Word Blanks:
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " " + ".";
console.log(wordBlanks);

// 37. Store Multiple Values in one Variable using JavaScript Arrays:
var myArray = ["peanut butter", "jelly", 1234, "bread"]
console.log(myArray);

// 38. Nest one Array within Another Array:
var myArray = [["Tiger", 23], ["Lion", 45], ["Cheeta", 50]]
console.log(myArray);

// 39. Access Array Data with Indexes:
var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

// 40.Modify Array Data With Indexes:
var myArray = [50, 60, 70];
myArray[0] = 45;
console.log(myArray);

console.log("Shadan College");
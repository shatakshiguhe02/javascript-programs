function stringHandsOn() {
    console.log("------------------No argument no return----------------");

    console.log(`1. Given a String : "   Hey you are doing good, keep it up   "`);
    var string = "   Hey you are doing good, keep it up   "


    var stringLength = string.length;
    console.log(`2. Length of String : ${stringLength}`);

    console.log("------------------Trim()-------------------------------");

    var string = "   Hey you are doing good, keep it up   "
    var stringAfterTrim = string.trim();
    console.log(`3. String after trim is : ${stringAfterTrim}`);

    var stringLength = string.length;
    console.log("4. Before string trim length is: ", stringLength);

    var stringAfterTrimLength = stringAfterTrim.length;
    console.log(`5. After string trim length is:  ${stringAfterTrimLength}`);


    console.log("6. Total number of extra spaces count is : ",stringLength- stringAfterTrimLength );

    console.log("------------------Charat()------------------------------");

    var charAt = stringAfterTrim.charAt(0);
    console.log("7. First Character of string is :", charAt);

    var lastChar = stringAfterTrim.charAt(stringAfterTrim.length - 1);
    console.log("8. Last Character of string is  :", lastChar);

    console.log("------------------Split()-------------------------------");

    var result = stringAfterTrim.split(" ");
    console.log(result);
    console.log(`9. Total number of words: ${result.length}`);

    console.log("------------------Indexof()-----------------------------")

    var indexOf = stringAfterTrim.indexOf("good");
    console.log(`10. Index of word "good" in the string is : ${indexOf}`);

    console.log("------------------Substring()---------------------------")

    var subStringOf = stringAfterTrim.substring("22");
    console.log(`11. Substring starting from index '22' is : ${subStringOf}`);

    console.log("------------------Includes()----------------------------")

    var result = stringAfterTrim.includes("up");
    console.log(`12. String ends with the word "up" : ${result}`);
    var result = stringAfterTrim.includes("Hey");
    console.log(`13. String Starts with the word "Hey" : ${result}`)
}
stringHandsOn();


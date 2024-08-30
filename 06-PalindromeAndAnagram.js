
console.log(`====Write a function to check weather the string is palindrome or not=======`);

function checkPalindrom(str1,str2,str3) {
    function isPalindrome(str) {
        let reverseString = str.split('').reverse().join('');
        return reverseString==str;
    }
    console.log(`"madam" : ${str1} is ${isPalindrome(str1) ? '' : 'not '}a palindrome`);
    console.log(`"dad"   : ${str2} is ${isPalindrome(str2) ? '' : 'not '}a palindrome`);
    console.log(`"hello" : ${str3} is ${isPalindrome(str3) ? '' : 'not '}a palindrome`);
    
}
checkPalindrom("madam", "dad", "hello");

console.log(` `);
console.log(`====Write a function to check weather the string is Anagram or not==========`);
function isAnagram(str1,str2) {
    let string1 = str1.toLowerCase().split('').sort().join('');
    let string2 = str2.toLowerCase().split('').sort().join('');
    if (string1==string2) {
        console.log(`Given string : ${str1}, ${str2} : It is Anagram`);
    }else{
        console.log(`Given string : ${str1}, ${str2} : It is not Anagram`);
    }
}
isAnagram("Silent","Listen");
isAnagram("Hello","World");
isAnagram("Such","much");
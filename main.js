
// task 1.

let str="Robin Singh"
 console.log(str.split(' '))

 

 //task 2.

 let text="Robin Singh"
 console.log(text.substring(0,4))



//task 3.

protect_email = function (userMail) {
    var part,split,text1,text2;
    split = userMail.split("@");
    text1 = split[0];
    part = text1. length/ 2;
    text1 = text1.substring(0, (text1.length - part));
    text2 = split[1];
    return text1 + "...@" + text2;
};
console.log(protect_email("robin_singh@example.com"));



//task 4.

function repeatString(string, count) {
    if (string == null || count < 0 || count == null) {
        return "Error in string or count.";
    }
    return new Array(count+1).join(string);
}
console.log(repeatString("a",4));
console.log(repeatString("a"));



//task 5.

function wordFinder(text, searchWord){
    const myArray = text.split(/\s|,/)
    let counter = 0
    
    for (let index = 0; index < myArray.length; index++) {
        if(myArray[index].toLowerCase() === searchWord.toLowerCase()){
            counter++
        }
    }
    return `'${searchWord}' was found ${counter} times.`
    
}
console.log(wordFinder('Baku is an ancient city', 'city'));
console.log(wordFinder('aa, bb, cc, dd, aa', 'aa'));

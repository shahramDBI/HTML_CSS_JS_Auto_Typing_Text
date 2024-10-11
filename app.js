var myString = "My name is Shahram & I'm a Web Developer ."
var myArray = myString.split("");
console.log(myArray);
var loopTimer;

function fremeLooper(){
    if (myArray.length > 0){
        document.getElementById("myTypingText").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer)
    }
    loopTimer = setTimeout('fremeLooper()', 150);
}

fremeLooper();
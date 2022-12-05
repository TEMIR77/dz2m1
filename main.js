var name = prompt("Temir")
surname = prompt("Urmatbekov")
alert ("Здравствуйте "+name+" "+surname);


var num = 0;
var obj = new String("0");
var str = "0";

console.log(num == num);
console.log(obj == obj);
console.log(str == str);

console.log(num == obj);
console.log(num == str);
console.log(obj == str);


const num1 = 23;
const num2 = 16;
console.log(num1 > num2);   

const num3 = 20;
const num4 = 30;
console.log(num3 < num4);



const colorList =  [
    {name: 'yellow', interval: 500},
    {name: 'red', interval: 4000},
    {name: 'yellow', interval: 500},
    {name: 'green', interval: 4000}
]; 

let count = 0;

function changeColor()  {
    if (count === colorList.length) {
        count = 0;
    }
    console.log(colorList[count].name)
    setTimeout(changeColor, colorList[count].interval)
    count = count + 1;
}

changeColor()


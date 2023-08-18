let reverseString = (inputString) => inputString.split('').reverse().join('');
let inputString = "hello";
let reversedString = reverseString(inputString);
console.log(reversedString);

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = sum / numbers.length;
    return average;
}

let numbers = [8, 9, 10, 7];
let avg = calculateAverage(numbers);
console.log(`result: ${avg}`);
let array = ["name", "John", "lastname", "Black", "age", "23"];
let resultObj = {};
for (let i = 0; i < array.length; i += 2) {
    let key = array[i];
    let value = array[i + 1];
    resultObj[key] = value;
}
console.log(resultObj);
let data = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, 'uioo'];
let groupedByType = {};
data.forEach(item => {
    let type = typeof item;
    if (groupedByType[type]) {
        groupedByType[type] = [];
    }
    groupedByType[type].push(item);
});
let sortedArrays = Object.values(groupedByType).sort((a, b) => a.length - b.length);
console.log(sortedArrays);

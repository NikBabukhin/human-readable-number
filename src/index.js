module.exports = function toReadable (number) {
    let numberArray = number.toString().split('').reverse();
    let resStr;
    if (number<=19) {
        numberArray = readableArray[number]
    } else if (number>=100) {
        numberArray[2] = readableArray[Math.floor(number/100)] + ' hundred';
        if (number%100 <= 19 && number%100 != 0) {
            numberArray[0] = '';
            numberArray[1] = readableArray[number%100];
        } else if (number%10 == 0) {
            numberArray[0] = '';
            if (number%100 == 0) {
                numberArray[1] = '';
            } else {
                numberArray[1] = readableArray10[number.toString()[1]];   
            }
        } else {
            numberArray[1] = readableArray10[number.toString()[1]];
            numberArray[0] = readableArray[number.toString()[2]];
        }
            numberArray.reverse();
            resStr = numberArray.filter(element => element != '');
            return resStr.join(' ');
    } else if (number<100 && number>19) {
        numberArray[1] = readableArray10[Math.floor(number/10)];
            if (number%10 === 0) {
                numberArray[0] = '';
            } else {
                numberArray[0] = readableArray[number%10];
            };
        numberArray.reverse();
        resStr = numberArray.filter(element => element != '')
        return resStr.join(' ');
    };
    resStr = numberArray;
    return resStr;
};


const readableArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const readableArray10 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    /**
     * How to brute force a problem for for dummies
     * I really need to fix this, there's a way better way to do it that I'm too lazy to use
     */
    
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    var dict = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    };
    
    
    
    let result = '';
    let startIndex = 0;
    
    while (num > 0 && startIndex <= 12)
    {
        if (num >= numbers[startIndex])
        {
            num -= numbers[startIndex];
            result += dict[numbers[startIndex]];
        }
        else if (num < numbers[startIndex])
        {
            startIndex += 1;
        }
    }

    return result;
    
};
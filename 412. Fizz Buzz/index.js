/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ret = [];
    for (;n > 0;n--) {
        ret.push(
            n % 3 === 0 || n % 5 === 0
                ?
            `${n % 3 === 0 ? 'Fizz' : ''}${n % 5 === 0 ? 'Buzz' : ''}`
                :
            `${n}` 
        );
    }
    return ret.reverse();
};
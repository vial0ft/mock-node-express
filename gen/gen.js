function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}


function gen (abc) {
    return () => {
      let pos = Math.floor(Math.random() * abc.length)
      return abc[pos]
    }
  }

const genLetter = gen(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"));
const genNumber = gen(Array.from({ length: 10 }, (v, i) => i))

function genString(len = 1) {
    const scratchArr = new Array(len).fill(undefined);
    return () => scratchArr.reduce((acc, el) => acc + genLetter(), "") 
}

function genInteger(from = 0, to) {
    return gen(range(from, to))
}

function getFloat(min, max, decimals) {
    return () => parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}

function genArray(lenLimit, valueGen) {
    const scratchArr = new Array(genInteger(1, lenLimit)()).fill(undefined);
    return () => scratchArr.reduce((acc, el) => [...acc, valueGen()], [])
}

module.exports = {
    gen,
    genString,
    genNumber,
    genInteger,
    getFloat,
    genArray
}

 random=()=> {
    let start = parseInt(document.getElementById('start').value)
    let end = parseInt(document.getElementById('end').value)
    index = end - start + 1;
    let random = parseInt(Math.floor(Math.random() * (end - start + 1)) + start);
    document.getElementById('answer-random').innerHTML = ('Số random : ') + random
    if (index < 10) {
        document.getElementById('arrRandom').innerHTML = ('Mảng array 10 số ngẫu nhiên : rỗng ')
    } else {
        const arrRandom = Array.apply(null, Array(10))
            .map( ()=> { return Math.floor(Math.random() * (end - start + 1)) + start })
        document.getElementById('arrRandom').innerHTML = ('Mảng array 10 số ngẫu nhiên : ') + arrRandom
    }

}


// bài 3
const arr = [1, 2, 3, 4, 5]
const getOddNumbers = arr.filter(items => items % 2 !== 0)
console.log('bài 3: ' + getOddNumbers);
// bài 4
const numberDouble = arr.map(items => items * 2)
console.log('bài 4: ' + numberDouble);

// bài 5
const arrReduce = [1, 3, 4, 5, 1, 3, 1];
const map = arrReduce.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
}, {});
//   console.log(JSON.stringify(map));
console.log(map);


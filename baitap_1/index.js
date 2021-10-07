
//   random=()=> {
//     const start = parseInt(document.getElementById('start').value)
//     const end = parseInt(document.getElementById('end').value)
//     const index = end - start + 1;
//     let random = parseInt(Math.floor(Math.random() * (end - start + 1)) + start);
//     document.getElementById('answer-random').innerHTML = ('Số random : ') + random
//     if (index < 10) {
//         document.getElementById('arrRandom').innerHTML = ('Mảng array 10 số ngẫu nhiên : rỗng ')
//     } else {
//         const arrRandom = Array.apply(null, Array(10))
//             .map( ()=> { return Math.floor(Math.random() * (end - start + 1)) + start })
//         document.getElementById('arrRandom').innerHTML = ('Mảng array 10 số ngẫu nhiên : ') + arrRandom
//     }
// }
const start = document.getElementById('start')
const end = document.getElementById('end')
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()
    const valueStart = parseInt(start.value)
    const valueEnd = parseInt(end.value)
    const index = valueEnd - valueStart + 1;
    const random = parseInt(Math.floor(Math.random() * (valueEnd - valueStart + 1)) + valueStart);
    document.getElementById('answer-random').innerHTML = ('Số random : ') + random
    if (index < 10) {
        document.getElementById('arr-random').innerHTML = ('Mảng array 10 số ngẫu nhiên : rỗng ')
    } else {
        const arrRandom = Array.apply(null, Array(10))
            .map(() => { return Math.floor(Math.random() * (valueEnd - valueStart + 1)) + valueStart })
        document.getElementById('arr-random').innerHTML = ('Mảng array 10 số ngẫu nhiên : ') + arrRandom
    }
})


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


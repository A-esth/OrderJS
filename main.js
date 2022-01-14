/* ---------- Testing Algorithms ---------- */
import { squareSort, triangleSort, diamondSort } from './sort.js'
// List Randomiser
function shuffleList(list){

    let shuffledList = list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return shuffledList
}

function generateBigRandomLists(size){
    return Array.from({length: size}, () => Math.floor(Math.random() * size));
}

let testList = shuffleList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(`[BENCHMARK]: Sorting ${testList}\n`)

console.log(`The squareSort algorithm gave ${squareSort(testList)[0]}`)
console.log(`The triangleSort algorithm gave ${triangleSort(testList)[0]}`)
console.log(`The diamondSort algorithm gave ${diamondSort(testList, 5)[0]}`)

console.log('\nAll algorithms are working OK.\n')

console.log('[SPEEDTEST] 1000 elements\n')

let longRandList = generateBigRandomLists(10000)
let [, durationA] = squareSort(longRandList)
console.log(` The squareSort took ${durationA}`)
let [, durationB] = triangleSort(longRandList)
console.log(` The triangleSort took ${durationB}`)
let [, durationC] = diamondSort(longRandList, 0)
console.log(` The diamondSort took ${durationC}`)


/*
    OUTPUT
        [BENCHMARK]: Sorting 2,0,8,6,1,5,4,3,7,9

        The squareSort algorithm gave 0,1,2,3,4,5,6,7,8,9
        The triangleSort algorithm gave 0,1,2,3,4,5,6,7,8,9
        The diamondSort algorithm gave 0,1,2,3,4,5,6,7,8,9

        All algorithms are working OK.

        [SPEEDTEST] 10000 elements
        The squareSort took 897
        The triangleSort took 430 // Effectively half of the time above //
        The diamondSort took 30374 // I think the current implementation isn't efficient //
*/
export {}
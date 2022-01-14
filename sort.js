/* -------------------- from 1st element -------------------- */
function squareSort(list){
    let listOfNumbers = [...list]

    // Starts Timer
    let timestart = (new Date()).getTime()
    // Initiates Sorting
    for(let i = 0; i < listOfNumbers.length - 1; i++){
        for (let j = 0; j < listOfNumbers.length - 1; j++) {
            if (listOfNumbers[j]>listOfNumbers[j+1]) {
                [listOfNumbers[j],listOfNumbers[j+1]]=[listOfNumbers[j+1],listOfNumbers[j]]
            }
            
        }
    }
    // Stops Timer
    let duration = (new Date()).getTime() - timestart
    return [listOfNumbers, duration]
}

function triangleSort(list){
    let listOfNumbers = [...list]
    // Starts Timer
    let timestart = (new Date()).getTime()
    // Initiates Sorting
    for (let i = 0; i < listOfNumbers.length - 1; i++)/* Forward */{
        if(listOfNumbers[i]>listOfNumbers[i+1]){
            [listOfNumbers[i],listOfNumbers[i+1]]=[listOfNumbers[i+1],listOfNumbers[i]]
            for (let j = i; j > 0; j--)/* Backward */{
                if(listOfNumbers[j-1]>listOfNumbers[j]){
                    [listOfNumbers[j],listOfNumbers[j-1]]=[listOfNumbers[j-1],listOfNumbers[j]]
                }
            }
        }
    }
    // Stops Timer
    let duration = (new Date()).getTime() - timestart
    return [listOfNumbers, duration]
}

/* -------------------- from any element -------------------- */

function diamondSort(list, index){
    let listOfNumbers= [...list]
    // Starts Timer
    let timestart = (new Date()).getTime()
    // Initiates Sorting
    // Outward Bi-directional Main Propagation
    for(let [i, k]= [index, (((listOfNumbers.length % 2 ===1)?index: index+1))]; (i < (listOfNumbers.length - 1) || (k > 0)); [i++, k--]){
        if(listOfNumbers[i]>listOfNumbers[i+1] || listOfNumbers[k-1]>listOfNumbers[k]){
            if (listOfNumbers[i]>listOfNumbers[i+1]) {
                [listOfNumbers[i], listOfNumbers[i+1]] = [listOfNumbers[i+1], listOfNumbers[i]]
            }
            if(listOfNumbers[k-1]>listOfNumbers[k]){
                [listOfNumbers[k], listOfNumbers[k-1]] = [listOfNumbers[k-1], listOfNumbers[k]]
            }
            // Reverse Propagation Wavelets
            for(let [j, l]=[i, k]; (j > index || l < ((listOfNumbers.length % 2 ===1)?index: index+1)); [j--,l++]){
                if(listOfNumbers[j-1]>listOfNumbers[j] || listOfNumbers[l]>listOfNumbers[l+1]){
                    if (listOfNumbers[j-1]>listOfNumbers[j]) {
                        [listOfNumbers[j], listOfNumbers[j-1]]=[listOfNumbers[j-1], listOfNumbers[j]]
                    }
                    if(listOfNumbers[l]>listOfNumbers[l+1]){
                        [listOfNumbers[l], listOfNumbers[l+1]] = [listOfNumbers[l+1], listOfNumbers[l]]
                    }
                }
            }
        }

    }
    /* ---------------------------------------------------------------- */
    // Inward Bi-directional Main Propagation
    for(let [i, k] = [(listOfNumbers.length - 1), 0]; (i > index || (k < ((listOfNumbers.length % 2 ===1)?index: index+1))); [i--, k++]){
        // Swapping
        if(listOfNumbers[i-1]>listOfNumbers[i] || listOfNumbers[k]>listOfNumbers[k+1]){
            if (listOfNumbers[i-1]>listOfNumbers[i]) {
                [listOfNumbers[i], listOfNumbers[i-1]] = [listOfNumbers[i-1], listOfNumbers[i]]
            }
            if(listOfNumbers[k]>listOfNumbers[k+1]){
                [listOfNumbers[k], listOfNumbers[k+1]] = [listOfNumbers[k+1], listOfNumbers[k]]
            }
            // Reverse Propagation Wavelets
            for(let [j, l]=[i, k]; (j < (listOfNumbers.length - 1) || l > 0); [j++,l--]){
                if(listOfNumbers[j]>listOfNumbers[j+1] || listOfNumbers[l-1]>listOfNumbers[l]){
                    if (listOfNumbers[j]>listOfNumbers[j+1]) {
                        [listOfNumbers[j], listOfNumbers[j+1]]=[listOfNumbers[j+1], listOfNumbers[j]]
                    }
                    if(listOfNumbers[l-1]>listOfNumbers[l]){
                        [listOfNumbers[l], listOfNumbers[l-1]] = [listOfNumbers[l-1], listOfNumbers[l]]
                    }
                }
            }
        }

    }
    // Stops Timer
    let duration = (new Date()).getTime() - timestart
    return [listOfNumbers, duration]
}

export {squareSort, triangleSort, diamondSort}
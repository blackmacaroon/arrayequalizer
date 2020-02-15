function equalizeArray(arr) {
    let maxcount = 0
    let currentcount = 1
    let sorted = arr.sort()

    for(let i=0; i<sorted.length; i++){
        // if it matches the previous, increase count
        if(sorted[i] == sorted[i+1]){
            currentcount ++
        // if it doesnt match the previous, compare count numbers
        } else {
            // if current count exceeds max counr, set new max count pointer
            if(currentcount > maxcount){
                maxcount = currentcount
            }
            // and reset the current pointer back to 1
            currentcount = 1
        }
    }
    // subtract from length
    let len = sorted.length
    return len - maxcount
}
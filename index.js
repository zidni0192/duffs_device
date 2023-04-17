export const duffsDeviceLoop = (total, callback) => {
    let index = 0, n = total % 10
    if (n > 0) {
        do {
            callback(index)
            index++;
        }
        while (--n); // n must be greater than 0 here
    }
    n = parseInt(total / 10, 10)
    if (n > 0) { // if iterations < 10 an infinite loop, added for safety in second printing
        do {
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
            callback(index)
            index++;
        }
        while (--n); // n must be greater than 0 here also
    }
}

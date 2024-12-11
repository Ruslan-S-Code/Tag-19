function calculateDifference(num) {
    let difference = num - 27;
    let result;
    
    if (difference > 0) {
        result = difference * 2;
    } else {
        result = difference;
    }
    
    console.log(`Input: ${num}, Ergebnis: ${result}`);
}


calculateDifference(35);   
calculateDifference(74);   
calculateDifference(123);  
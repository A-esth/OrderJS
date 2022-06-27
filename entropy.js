// Shannon entropy in bits per symbol.
function entropy(str) {
    const len = str.length
   
    // Build a frequency map from the string.
    const frequencies = Array.from(str)
      .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})
   
    // Sum the frequency of each character.
    return Object.values(frequencies)
      .reduce((sum, f) => sum - f/len * Math.log2(f/len), 0)
  }
   
  console.log(entropy('1223334444'))        // 1.8464393446710154
  console.log(entropy('lqksjgaomerigjeolkgjm'.sort()))                // 1
  


  /* 
    I define entropy as the measure of deviance from a certain desired order.
    I want to implement that.
    entropy <- (compute <- (currentState, desiredState))
  */
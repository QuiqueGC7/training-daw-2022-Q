function karateChop(target, array) {
    let low = 0;
    let high = array.length -1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  function runTests() {
    const tests = [
      { target: 8, array: [1, 3, 5, 7, 9, 11], expected: -1 },
      { target: 2, array: [1, 2, 3, 4, 5], expected: 1 },
      { target: 6, array: [1, 2, 3, 4, 5, 6], expected: 5 },
      { target: 4, array: [1, 2, 3, 4, 5, 6], expected: 3 },
      { target: 10, array: [2, 4, 6, 8, 10, 12], expected: 4 },
      { target: 12, array: [2, 4, 6, 8, 10, 12], expected: 5 }
    ];
  
    tests.forEach((t, i) => {
      const result = karateChop(t.target, t.array);
      console.log(
        `Test ${i + 1}: target=${t.target}, array=[${t.array}] -> result=${result}, expected=${t.expected}`,
        result === t.expected ? "✅" : "❌"
      );
    });
  }
  
  runTests();
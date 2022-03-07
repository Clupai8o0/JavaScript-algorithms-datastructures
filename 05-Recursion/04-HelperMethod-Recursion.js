function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify outerScopedVariable
    helper(helperInput--);
  }

  helper(input);
  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0)
      result.push(helperInput[0]);
    
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}
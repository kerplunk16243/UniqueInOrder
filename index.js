function uniqueInOrder(sequence) {
  if (sequence.length === 0) {
    return [];
  }

  const result = [sequence[0]];
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1]) {
      result.push(sequence[i]);
    }
  }

  return result;
}

// ez!

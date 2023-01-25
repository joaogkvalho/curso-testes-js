export function sum(n1, n2) {
  const int1 = parseInt(n1, 10);
  const int2 = parseInt(n2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
}

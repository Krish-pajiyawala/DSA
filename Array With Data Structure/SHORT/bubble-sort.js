let a = [300, 350, 520, 8000, 100];

for (let i = 0; i < a.length - 1; i++) {
  for (let j = 0; j < a.length - 1 - i; j++) {
    if (a[j] > a[j + 1]) {
      let temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
    }
  }
}
console.log(a);

let ar = [12, 34, 1, 16, 28];

for (let i = 1; i < ar.length; i++) {
    let cur = ar[i];
    let j = i - 1;
    while(j >= 0 && cur < ar[j]) {
        ar[j+1] = ar[j];
        j--;
    }
    ar[j+1] = cur;
}

console.log(ar);
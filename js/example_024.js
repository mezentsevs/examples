let i = 5;

while (i--) {
    const j = i;

    setTimeout(() => console.log(j));
}

/*
4
3
2
1
0
*/

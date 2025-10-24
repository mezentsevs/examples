let i = 5;

while (i--) {
    ((i) => {
        setTimeout(() => console.log(i));
    })(i);
}

/*
4
3
2
1
0
*/

const sortLinks = (links) => links.sort((a, b) => a.to === b.from ? -1 : 1);

const myLinks = [
    { from: '2', to: '3' },
    { from: '1', to: '2' },
    { from: '4', to: '5' },
    { from: '5', to: '6' },
    { from: '3', to: '4' },
];

console.log(sortLinks(myLinks));

/*
[
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '5', to: '6' }
]
*/

type Developer = {
    name: string;
    age: number;
    stack: string;
};

const developers: Developer[] = [
    { name: 'Jane', age: 25, stack: 'frontend' },
    { name: 'John', age: 28, stack: 'backend' },
    { name: 'Max', age: 35, stack: 'fullstack' },
];

function getObjectBy<T, K extends keyof T>(objects: T[], key: K, value: T[K]): T | null {
    return objects.filter(object => object[key] === value)[0] || null;
}

const object = getObjectBy(developers, 'name', 'Max');

console.log(object); // { name: 'Max', age: 35, stack: 'fullstack' }

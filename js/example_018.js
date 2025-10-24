let count = 0;

const sleep = time => new Promise(resolve => setTimeout(resolve, time));
const fetchData = async () => {
    await sleep(3000);

    return Promise.resolve(++count);
};

const empty = Symbol('empty');

function makeMemoize(fetch, expiry) {
    let cache = empty;

    return async function memoize() {
        if (cache !== empty) { return cache; }

        cache = await fetch();

        setTimeout(() => cache = empty, expiry);

        return cache;
    };
}

const memoize = makeMemoize(fetchData, 1000);

(async function() {
    await sleep(1000);
    console.log(await memoize()); // 1
    console.log(await memoize()); // 1

    await sleep(2000);
    console.log(await memoize()); // 2
    console.log(await memoize()); // 2
}());

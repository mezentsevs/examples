function orderWordsByNumber(sentence) {
    return sentence
        .split(' ')
        .map(word => {
            const [number] = word.match(/\d+/);

            return {
                order: Number(number),
                value: word,
            };
        })
        .sort((a, b) => a.order - b.order)
        .map(item => item.value)
        .join(' ');
}

console.log(orderWordsByNumber('fox4 8lazy brow3n T1he ove6r qu2ick th7e do9g ju5mps') === 'T1he qu2ick brow3n fox4 ju5mps ove6r th7e 8lazy do9g');

// true

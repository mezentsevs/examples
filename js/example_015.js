const article = {
    title: 'Article',
    printTitle() {
        console.log(this.title);
    },
};

article.printTitle(); // Article

let myPrintTitle = article.printTitle;

myPrintTitle(); // undefined

myPrintTitle.bind(article)(); // Article

myPrintTitle.call(article); // Article

myPrintTitle.bind(article).call({ title: 'Call' }); // Article

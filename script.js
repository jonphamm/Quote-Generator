const getNewQuote = async () => {
    // api for random quotes
    var url = "https://type.fit/api/quotes";

    // fetch the data from api, fetch() method returns a promise, which is handled by the await keyword
    const response = await fetch(url);
}
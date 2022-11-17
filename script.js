const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async() => {
    //api for quotes
    var url = "https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);

    // convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // generates a random number between 0 and the length of the quotes array
    const index = Math.floor(Math.random() * allQuotes.length);

    // store the quote present at the randomly generated index
    const quote = allQuotes[index].text;
    
    // store the author of the respective quote
    const auth = allQuotes[index].author;

    if(auth == null) {
        author = "Anonymous";
    }
 
    // function to dynamically display the quote and the author
    text.innerHTML = quote;
    author.innerHTML = "- " + auth;

    // tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " - " + auth;

}

getNewQuote();
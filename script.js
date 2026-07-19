const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweet = document.getElementById("tweet");

// Working API
const api = "https://dummyjson.com/quotes/random";

async function getQuote() {

    quote.innerHTML = "Loading...";
    author.innerHTML = "";

    try{

        const response = await fetch(api);
        const data = await response.json();

        quote.innerHTML = data.quote;
        author.innerHTML = "— " + data.author;

    }

    catch(error){

        quote.innerHTML = "Couldn't fetch quote.";
        author.innerHTML = "";

        console.log(error);

    }

}

getQuote();

newQuote.addEventListener("click", getQuote);

tweet.addEventListener("click",()=>{

    const text = `${quote.innerText} ${author.innerText}`;

    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
        "_blank"
    );

});
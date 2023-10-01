require('dotenv').config();
const apikey= process.env.ACCESS_TOKEN;
const API_ENDPOINT =
  "https://api.api-ninjas.com/v1/quotes?category=";


const topicInput=document.querySelector("#topic-input")
const generateButton=document.querySelector("#generate-button")
const quotesContiner=document.querySelector("#quotes-container")

generateButton.addEventListener("click",async ()=>{
    const topic=topicInput.value;
    const quotes=await getQuote(topic)
    displayQuote(quotes)
})

const getQuote=async (topicVal)=>{

    const requestOption={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            'X-Api-Key': apikey
        },
        limit:5
    }

    const response=await fetch(`${API_ENDPOINT}${topicVal}&limit=5`,requestOption)
    const data=await response.json()    
    return data;
}

const displayQuote=(quotes)=>{
    quotesContiner.innerHTML=""
    quotes.forEach((quote) => {
        const cardElement=document.createElement("div")
        const quoteElement=document.createElement("p")
        const authorEle=document.createElement("div")
        const categoryEle=document.createElement("div")
        cardElement.classList.add("cards-wrapper")
        authorEle.classList.add("author")
        categoryEle.classList.add("category")
        quoteElement.classList.add("quote")
        quoteElement.innerText=quote.quote
        categoryEle.innerText=quote.category
        authorEle.innerText=quote.author
        cardElement.appendChild(quoteElement)
        cardElement.appendChild(authorEle)
        cardElement.appendChild(categoryEle)
        quotesContiner.appendChild(cardElement)
    });
}
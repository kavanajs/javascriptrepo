const SportsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3236077c51ae4cb4a15134c60826a35e`;
window
.fetch(SportsApiUrl)
.then(data => {
    data.json()
    .then(sportsnews => {
        console.log(sportsnews);
        let sportsData = sportsnews.articles;
        let output = "";
        for(let sports of sportsData) {
            output+= `
           
            <h1 class="h1Title"><a href="${sports.url}" target=_blank>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>

            `;
            document.getElementById("left").innerHTML = output;
        }
    })
    .catch(err => console.log(err));
})
.catch(err => console.log(err));

//time javascript here
var day = new Date().getDay();
setInterval(() => {
var time  = new Date().toLocaleTimeString();
document.getElementById("time").innerHTML = `${time}`;
},1000);

const EntUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3236077c51ae4cb4a15134c60826a35e`;

window.fetch(EntUrl).then(data => {
    data.json().then(ent => {
        console.log(ent);
        let entData = ent.articles;
        let output = "";
        for(let ent of entData) {
            output+= `
           
            <h1 class="h1Title"><a href="${ent.url}" target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>

            `;
            document.getElementById("right").innerHTML = output;
        }
    })
    .catch(err => console.log(err));
}).catch(err => console.log(err));


//top news headlines
const topheadlineApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3236077c51ae4cb4a15134c60826a35e';

window
.fetch(topheadlineApiUrl)
.then(data => {
    data
    .json()
    .then(topnews => {
        console.log(topnews);
        let topnewsData = topnews.articles;
        let output = "";
        for(let topnew of topnewsData) {
            output +=`
                <h1 class="h1Title"><a href="${topnew.url}" target=_blank>${topnew.title}</a></h1>
                <p>${topnew.description}</p>
                <img src="${topnew.urlToImage}"/>
                <p>${topnew.publishedAt}</p>
    
            `;
        }
        document.getElementById("middle").innerHTML = output;

        
    })
})
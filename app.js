//call window object speech recognition....---only for browser
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();//constructor


//create html element through javascript and insert element
var p = document.createElement("p");//create html element through javascript
var words = document.getElementById("words");//connecting
words.appendChild(p);// for inserting 
console.log(words);


recognition.addEventListener("result",(e)=>{
    console.log(e.results);//callback function
    var transcript = [...e.results].map(result => result[0]).map(result => result.transcript).join("");//object to array----for nested loop we use 2 map means loops----array into string using join method
    
    //dom
    if (e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
        p.innerHTML = transcript;//innerHTML---override the content

    }
});//this is dom method to listen events
//result coming from speech recognition object----result taking onspeak words and passing to callback function

recognition.addEventListener('end', recognition.start);//whenever it ends,,it again started
recognition.start();//starting speechRecognition...


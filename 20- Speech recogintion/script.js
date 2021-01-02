window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

//define a speech recogntion instance to control the recognition for our application. 
const recognition=new SpeechRecognition();

//Interim results are results that are not yet final.
// Controls whether interim results should be returned (true) or not (false.) 
//If it is true then as we speak we get the results displayed
recognition.interimResults=true;
let p=document.createElement('p');
const container=document.querySelector('.container');
container.appendChild(p);

recognition.addEventListener('result',(e)=>{
    console.log(e);
    const transcript= Array.from(e.results)
        .map( result=>result[0] )
        .map(result=>result.transcript)
        .join('')
    p.textContent=transcript;
    if(e.results[0].isFinal){
        p=document.createElement('p');
        container.appendChild(p);
    }
    console.log(transcript);

})
recognition.addEventListener('end', recognition.start);
recognition.start();


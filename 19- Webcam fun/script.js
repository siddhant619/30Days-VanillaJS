const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const redButton=document.getElementById('red');
const grayButton=document.getElementById('gray');
const noneButton=document.getElementById('none');
let effect='';//set this to the function name for the particular effect on btn click
function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
        .then( (localMediaStream)=>{
            console.log(localMediaStream);
            //video.src=window.URL.createObjectURL(localMediaStream);
            video.srcObject=localMediaStream;
            video.play();
            //ctx.drawImage(video,10,10);
        } )
        .catch((e)=>{
            console.log('Error: '+e);
        } )
}
function showVideoOnCanvas(){
    const width=video.videoWidth;//width of the media in its natural size!->VVI coz in css we set width of player as 200px. But videoWidth gives the natural size.
    const height=video.videoHeight;
    canvas.width=width;//set the canvas h and w to natural size of video(VVI)
    canvas.height=height;
    setInterval( function(){
        ctx.drawImage(video,0,0,width,height);
        let pixels=ctx.getImageData(0,0,width,height);
        window[effect](pixels);//GFG- https://www.geeksforgeeks.org/how-to-call-function-from-it-name-stored-in-a-string-using-javascript/
        /* if(effect=='red')
            pixels=redEffect(pixels);
        else if(effect=='gray')
            pixels=grayEffect(pixels); */
         
        ctx.putImageData(pixels,0,0);
        
    },160 )
}

function redEffect(pixels){
    //pixels is not a normal array- so cant apply map method
    for(let i=0; i<pixels.data.length;i+=4){
        pixels.data[i+0]+=200;//R
        pixels.data[i+1]-=50;//G
        pixels.data[i+0]*=0.5;//B
    }
    return pixels;
}
function grayEffect(pixels){
    let pix=pixels.data;
    for(let i=0; i<pixels.data.length;i+=4){
        //This formula calculates the luminance of a color as it’s perceived by the human eye, so the green channel has more importance that the red and the blue
        //https://spyrestudios.com/html5-canvas-image-effects-black-white/
        var grayscale = pix[i ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
        pix[i ] = grayscale; // red
        pix[i+1] = grayscale; // green
        pix[i+2] = grayscale; // blue
    }
    return pixels;
}

function takeSnap(){
    const data=canvas.toDataURL('image/jpeg');//method returns a data URI containing a representation of the image in the format specified by the type parameter 
    const link=document.createElement('a');
    link.href=data;
    link.setAttribute('download','meh');//<a href=".." download /> this downloads. we can set the donwload to filename
    /* link.textContent="Download snap"; */
    link.innerHTML=`<img src=${data}>`

/*     strip.insertBefore(link, strip.firstChild);
*/
    strip.prepend(link);
}
getVideo();
video.addEventListener('canplay',function(){
    showVideoOnCanvas();
})

document.getElementById('takesnap').addEventListener('click',function(){
    takeSnap();
})

redButton.addEventListener('click', ()=>{
    effect='redEffect';
})

grayButton.addEventListener('click', ()=>{
    effect='grayEffect';
})
noneButton.addEventListener('click', ()=>{
    effect='';
})


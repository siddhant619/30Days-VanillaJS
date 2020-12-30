const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

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
    },16 )
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



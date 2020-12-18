const canvas=document.getElementById('draw');
        let isdraw=false;
        var ctx = canvas.getContext("2d");
        //ctx.strokeStyle = "#FF0000";
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        x_pos=0;
        y_pos=0;
        ctx.lineWidth=1;
        ctx.lineJoin='round';
        ctx.lineCap='round';
        ctx.strokeStyle = "#FF0000";
        hue=0;
        direction=1;
        function mousedown(e){
            isdraw=true;
            [x_pos,y_pos]=[e.offsetX,e.offsetY]

            console.log(e);
        }
        function mouseup(e){
            isdraw=false;
            console.log(e);
        }
        function mouseover(e){
            console.log(e);
            if(isdraw==true){
                
                ctx.beginPath();
                ctx.moveTo(x_pos,y_pos);
                ctx.lineTo(e.offsetX,e.offsetY);
                console.log(e.offsetX,e.offsetY);
                ctx.strokeStyle=`hsl(${hue},100%,50%)`;
                ctx.stroke();
                [x_pos,y_pos]=[e.offsetX,e.offsetY]
                /* x_pos=e.offsetX;
                y_pos=e.offsetY; */
                if(direction==1){
                    ctx.lineWidth=(ctx.lineWidth+1);
                    if(ctx.lineWidth>50)
                        direction=0;
                }
                else{
                    ctx.lineWidth=(ctx.lineWidth-1);
                    if(ctx.lineWidth<10)
                        direction=1;
                }
                hue++;
                if(hue>=357)
                    hue=0;
                
            }
            //console.log(e);
        }
        canvas.addEventListener('mousemove',mouseover);
        canvas.addEventListener('mousedown',mousedown);
        canvas.addEventListener('mouseup',mouseup);
        canvas.addEventListener('mouseleave',()=> {isdraw=false} );
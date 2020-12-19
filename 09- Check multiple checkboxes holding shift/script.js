let isShiftDown=false;
    const checkboxes=document.querySelectorAll('input[type=checkbox]');
    countCheckboxes=(checkboxes.length);
    function shiftdown(e){
        if(e.key=="Shift"){
            //console.log('shift down!');
            isShiftDown=true;

        }
    }
    function shiftup(e){
        if(e.key=="Shift"){
            //console.log('shift!');
            isShiftDown=false;

        }
    }
    window.addEventListener('keydown', shiftdown);
    window.addEventListener('keyup', shiftup);
    function boxclicked(){
        console.log('ch');
        if(isShiftDown==true){
            console.log('click with shift!!');
            num= (this.dataset.number);
            console.log(num);
            let mx=num;
            for(let i=num;i<countCheckboxes;i++){
                if(checkboxes[i].checked==true){
                    mx=i;
                }
            }
            console.log(mx);
           /*  for(let i=num;i<=mx;i++){
                checkboxes[i].checked=true;
            } */

            let mi=num;
            for(let i=num;i>=0;i--){
                if(checkboxes[i].checked==true){
                    mi=i;
                }
            }
            //console.log(mi);
            for(let i=mi;i<=mx;i++){
                checkboxes[i].checked=true;
            }

        }
    }
    for(let checkbox of checkboxes){
        checkbox.addEventListener('click', boxclicked);
    }
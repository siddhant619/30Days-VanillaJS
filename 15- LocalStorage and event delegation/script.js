const addItems=document.querySelector('.add-items');
const platesList=document.querySelector('.plates');//ul
/*when page loads, we fill the items array with whatevers is stored in localStorage.getItem("itemsArray").
Now when we add elements to items array we RESET the localstorage with the items array*/
const items = JSON.parse(localStorage.getItem("itemsArray"))||[];//array of objects
function addItem(e){
    e.preventDefault();
    const val=this.querySelector('input[type=text]').value;
    const item={
        text:val,
        done:false
    };
    items.push(item);
    /* const newList=document.createElement('li');
    newList.innerHTML=`<input type="checkbox"><label>${val.value}</label>`;
    platesList.appendChild(newList); */
    //console.log(val.value);
    
    localStorage.setItem("itemsArray",JSON.stringify(items) );//Over-writes!
   // displayList(   JSON.parse(localStorage.getItem("items") ) );
   displayList(items);
    this.reset();//clear the input field(this refers to the form)

}
function displayList(arr){
    console.log(arr);
    platesList.innerHTML=arr.map( (item,index)=>{
        //console.log(item.text);
        //return item.text;
        return `<li>
            <input type="checkbox"  id=${index}  ${item.done?'checked':''}  >
            <label>${item.text}</label>
        </li>`;
    } ).join('');
    //console.log(arr.join(''));
}
addItems.addEventListener('submit',addItem);

function handleClick(e){
    console.dir(e.target);//see this in console,We got the actual element
    if(!e.target.matches('label'))return;
    const clickedId=e.target.previousElementSibling.id;
    console.log(clickedId);
    items[clickedId].done=!items[clickedId].done;
    /* for(let i=0;i<items.length;i++){
        if(clickedId== i){
            //items[i].done=!items[i].done;
            if(items[i].done==true)
                items[i].done=false;
            else
            items[i].done=true;
        }
        
    } */
    console.log(items);
    localStorage.setItem("itemsArray",JSON.stringify(items) );//Over-writes!
    //e.target.previousElementSibling.checked=!e.target.previousElementSibling.checked;
    displayList(items);
}
platesList.addEventListener('click',handleClick);//event delegation
document.getElementById('clearAll').addEventListener('click', ()=>{
    items.forEach(item => {
        item.done=false;
    });
    localStorage.setItem("itemsArray",JSON.stringify(items) );//Over-writes!
    displayList(items);
    
})
displayList(items);
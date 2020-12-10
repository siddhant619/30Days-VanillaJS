const blur=document.querySelector('#blur');
const space=document.querySelector('#space');
const color=document.querySelector('#color');
blur.addEventListener('input',function(){
	console.log(blur.value);
	//document.documentElement.style.setProperty('--blur', blur.value+'px');
	//document.getElementById('heading').style.setProperty('font-size', blur.value+'px');
	//The CSS variables like --blur are accessed just like any other property like font-size etc.
	document.querySelector('.container').style.setProperty('--blur', blur.value+'px');
})
space.addEventListener('input',function(){
	console.log(space.value);
	//document.documentElement.style.setProperty('--blur', blur.value+'px');
	document.querySelector('.container').style.setProperty('--spacing', space.value+'px');
})
color.addEventListener('input',function(){
	console.log(color.value);
	//document.documentElement.style.setProperty('--blur', blur.value+'px');
	document.querySelector('.container').style.setProperty('--wes-color', color.value);
})
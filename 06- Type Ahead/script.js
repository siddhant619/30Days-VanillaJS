let input=document.getElementById('city');
		let text=document.getElementById('text');
		const data=[];
		const getData= async function(){
			const res=await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
			//console.log('initial fetch done.. fetching data now..');
			const d=await res.json();//res.json() also returns a promise!
			data.push(...d);//use of spread!
			//text.innerHTML="";
			/*console.log(this.value);
			for(let i=0;i<1000;i++){
				if(data[i].city.toLowerCase().includes(this.value.toLowerCase()))
				{
					let p=document.createElement('p');
					p.innerHTML=data[i].city;
					text.append(p);
				}

			}*/

		}
		getData();
		function fun(){
			let c=0;
			text.innerHTML="";
			for(let i=0;i<1000;i++){
				if((data[i].city.toLowerCase().includes(this.value.toLowerCase())) ||(data[i].state.toLowerCase().includes(this.value.toLowerCase())))
				{
					let p=document.createElement('p');
					const regex=new RegExp(this.value,'gi');
					const cityname= data[i].city.replace(regex,`<span class="hl">${this.value}</span>`);
					const statename= data[i].state.replace(regex,`<span class="hl">${this.value}</span>`);
					p.innerHTML=cityname+",  "+statename+"<span class='population'>"+data[i].population;
					text.append(p);
					c++;
				}

			}
		}
		input.addEventListener('input', fun );
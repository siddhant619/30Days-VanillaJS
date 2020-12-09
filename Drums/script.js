function play(id){
			var x=document.getElementById(id);
			x.currentTime=0;//VVI-> restarts the sound if it is already playing.
			x.play();
			//alert(x.duration);
		}
	
		document.body.addEventListener('keydown', function(evt){
			console.log(evt);
			if(evt.code=="KeyA")
			{
				console.log('key a pressed');
				document.getElementById("one").classList.add('playing');
				play("drum");
				//document.getElementById("one").classList.remove('playing');
			}
			else if(evt.code=="KeyS")
			{
				console.log('key s pressed');
				document.getElementById("two").classList.add('playing');
				play("pristine");
			}
			else if(evt.code=="KeyD")
			{
				console.log('key d pressed');
				document.getElementById("three").classList.add('playing');
				play("swiftly");
			}
			else if(evt.code=="KeyF")
			{
				console.log('key f pressed');
				document.getElementById("four").classList.add('playing');
				play("that");
			}
			else if(evt.code=="KeyG")
			{
				console.log('key g pressed');
				document.getElementById("five").classList.add('playing');
				play("juntos");
			}


		})

		function removeclass(e){
			if(e.propertyName!=='transform') return;
			console.log(this);
			this.classList.remove('playing');
		}
		var keys=document.querySelectorAll('.btn');
		for(let key of keys )
		{
			key.addEventListener('transitionend', removeclass);
		}

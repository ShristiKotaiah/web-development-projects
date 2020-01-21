function upDate(previewPic){
  var x= document.getElementById('image');
  x.innerHTML=previewPic.alt;
  x.style.backgroundImage="url('"+previewPic.src+"')";
  x.style.backgroundColor="#000000";  
  
 
	}

	function unDo(){
		var y=document.getElementById('image');
		y.innerHTML="Hover over an image below to display here.";
		y.style.backgroundImage="url('')";
		y.style.backgroundColor="#8e68ff";
		
	}
 
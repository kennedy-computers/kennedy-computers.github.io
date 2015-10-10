$(function(){
	//notes
	var ratio = window.innerWidth/window.innerHeight;
	var invRatio = 1/ratio;
	var imgRatio = 1490/3200;
	var names = [
		[
			"Setting up Java",
			"Bare Minimum Code",
			"The Print Statement",
			"Conditionals",
			"Variables and Datatypes",
			"Booleans"
		]//arrays of names for each subject, object with properties not needed (like the urls object)
	];//names of the notes
	var urls = {
		java: [
			"https://docs.google.com/document/d/1n2vg4Zh_mxjoSgWo6vdeHzUcnUjGV1b2eys3u3o9o44/",
			"https://docs.google.com/document/d/1Qb4OkBEGyo0LzwkP6AnsETOBdB1wpBTHEutcbNxrnko/",
			"https://docs.google.com/document/d/1cwoA8YlNfaZ4PdfYTiRTrwqY4x8BMKV20iFh7swW4hM/",
			"https://docs.google.com/document/d/1Mp3J0f4ayPhZ1J4pUHU0KhzFZYgSfcg6XTWMsgOxJyE/",
			"https://docs.google.com/document/d/1zmaiXYm-iQD3DJfuyitXVO64pXnlhW03YHRNcLhzPTE/",
			"https://docs.google.com/document/d/1JqIzkPY19MvzYmgLwNEBZI0AJzMfeO5BP8VRaahB07M/"
		] //add each subject as a new property of object urls
	};//notes will be on google docs.
	var top;
	//java notes
	for(var iname = 0; iname < Object.keys(urls).length; iname++){
		$.each(names[iname], function(iraw, val){
			//create a "box" for each notes topic
			var i = iraw * (iname + 1);
			var key = Object.keys(urls)[iname];
			$("<div class='notesbox' name='"+key+"' id='notes"+iraw+"'></div>").appendTo("#notes")
				.append("<img src='../images/"+key+"/"+val.toLowerCase()+".PNG'>")
				.append("<div class='links'>"+val+"</div>")
				.css({
					"left": "calc(8px + " + (i%3)*31 +"%)",
					"top": 6+Math.floor(i/3)*(invRatio*30)+Math.floor(i/3)+"vw"
				});
		});
	}//iterate through urls object and subarray to create note boxes
	setTimeout(function(){$(".links").css("font-size", $(".links").height()+"px");},7000);//set font size to fill entire link box}
	$(".notesbox").click(function(){ //click event to go to url of notes when notesbox clicked
		window.open(urls[this.getAttribute("name")][parseInt(this.id.replace("notes",""))]);//open doc on click
		//window.open = opens the document
		//urls[this.getAttribute("name")] is for getting a property of object, accessing it by string
		//last [] specifies which element of array to retrieve
	}).height(imgRatio*0.3*window.innerWidth);
	//set height of each notesbox
	var $nb = $(".notesbox").eq($(".notesbox").length-1);//get the last notesbox element
	$("h1").eq(1).css("top",$nb.offset().top+$nb.height()+"px").css("left","8px")
	//get the last heading and set it to under the last notesbox
});

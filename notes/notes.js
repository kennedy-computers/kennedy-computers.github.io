$(function(){
	//notes
	var ratio = window.innerWidth/window.innerHeight;
	var invRatio = 1/ratio;
	var imgRatio = 1490/3200;
	var names = [
		[
			"The Print Statement",
			"Conditionals"
		]
	];//names of the notes
	var urls = {
		java: [
			"https://docs.google.com/document/d/1cwoA8YlNfaZ4PdfYTiRTrwqY4x8BMKV20iFh7swW4hM/",
			"https://docs.google.com/document/d/1Mp3J0f4ayPhZ1J4pUHU0KhzFZYgSfcg6XTWMsgOxJyE/"
		]
	};//notes will be on google docs.
	var top;
	//java notes
	for(var iname = 0; iname < Object.keys(urls).length; iname++){
		$.each(names[iname], function(iraw, val){
			//create a "box" for each notes topic
			var i = iraw * iname;
			var key = Object.keys(urls)[iname];
			$("<div class='notesbox' name='"+key+"' id='notes"+iraw+"'></div>").appendTo("#notes")
				.append("<img src='../images/"+key+"/"+val.toLowerCase()+".PNG'></iframe>")
				.append("<div class='links'>"+val+"</div>")
				.css({
					"left": "calc(8px + " + (i%3)*31 +"%)",
					"top": 6+Math.floor(i/3)*(invRatio*30)+Math.floor(i/3)+"vw"
				});
		});//iterate through 'names'
	}
	
	$(".notesbox").click(function(){
		window.open(urls[this.getAttribute("name")][parseInt(this.id.replace("notes",""))]);//open doc on click
	}).height(imgRatio*0.3*window.innerWidth);
	var $nb = $(".notesbox").eq($(".notesbox").length-1);
	$("h1").eq(1).css("top",$nb.offset().top+$nb.height()+"px").css("left","8px")
	
});

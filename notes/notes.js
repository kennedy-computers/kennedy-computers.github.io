$(function(){
	//notes
	var ratio = window.innerWidth/window.innerHeight;
	var invRatio = 1/ratio;
	var names = [
		"Variables and Strings",
		"Conditionals",
		"While Loop",
		"For Loop",
		"Functions"
	];//names of the notes
	var urls = [
		"https://docs.google.com/document/d/1EecgKsusFAbvUtwgjJZXX8lhX7MpzNZc-UVgYtCv6iw/",
		"https://docs.google.com/document/d/1BFH8bY-CwMxBf3tHrMjN_i6xcTFTJG5IEnS4q5X6vQA/",
		"https://docs.google.com/document/d/1u3QczD7alRL1sdF9z0959qftYX-h9-R5_9XcDeaGCfI/",
		"https://docs.google.com/document/d/1dfM1GmaavLKGyvanC4gaPd9Y7ysU4Oe1Jj1jRwu6xm0/",
		"https://docs.google.com/document/d/1_pabhdNj321AxN-n9liwuqZYmOJ2l6fLBS-6SEOb9os/"
	];//notes will be on google docs.
	var top;
	$.each(names, function(i, val){
		//create a "box" for each notes topic
		$("<div class='notesbox' id='notes"+i+"'></div>").appendTo("#notes")
			.append("<img src='../images/"+val.toLowerCase()+".PNG'></iframe>")
			.append("<div class='links'>"+val+"</div>")
			.css({
				"left": (i%3)*31 +"%",
				"top": 6+Math.floor(i/3)*(invRatio*30)+Math.floor(i/3)+"vw"
			});
	});//iterate through 'names'
	$(".notesbox").click(function(){
		window.open(urls[parseInt(this.id.replace("notes",""))]);//open doc on dblclick
	}).height(invRatio*0.3*window.innerWidth);
	$("h1").css({
		"background-color":"yellow",
		"width":"auto"
	});
	setTimeout(function(){
	$(document.body).css({
		"background-image":"url(../images/lines.png) repeat-y",
		"background-size":"100% 4%"
	});//set background
	},10000);
});

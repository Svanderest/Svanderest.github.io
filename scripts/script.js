$(document).ready(function(){
	console.log("hello world");
	$.ajax({
		url: "partials/home.html", 
		success: function(result){
		    $("#div1").html(result);
		}
	});
});
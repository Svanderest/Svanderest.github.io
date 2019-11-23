$(document).ready(function(){	
	getPartial("home.html");
});

function getPartial(fileName)
{
	$.ajax({
		url: "partials/" + fileName, 
		success: function(result){
		    $(result).insertBefore("hr");
		}
	});
}

$(document).ready(function(){	
	getPartial("partials/home.html");
	$("a.internal").click(function(){
		getPartial($(this).attr("href"));
		return false;
	});
});

function getPartial(path)
{
	$.ajax({
		url: path, 
		success: function(result){
			$("#partial-content").empty();
		    $(result).appendTo("#partial-content");
		}
	});
}
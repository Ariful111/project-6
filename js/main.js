$(document).ready(function(){
//dropdown
	$(".aicon").click(function(){
		$(".dropdown").toggleClass("m").collapse('toggle');
	});
//sub-dropdown
	$(".bicon").click(function(){
		$(".sub-dropdown").toggleClass("m").collapse('toggle');
	});
});
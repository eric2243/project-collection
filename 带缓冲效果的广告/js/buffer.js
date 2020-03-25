$(document).ready(function() {
	$("#bufferIcon").click(function() {
		$(this).hide();
		$("#AD").animate({width:175},500,function() {
			$("#buffer").show();
		})
	})
	$("#buffer").click(function() {
		$(this).hide();
		$("#AD").animate({width:0},500,function() {
			$("#bufferIcon").show();
		})
	})
})
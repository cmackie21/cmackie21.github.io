$(document).ready(function() {

    $("#resh-button").click( function(event){
		$("#esh-panel").fadeToggle();
	});
	
	$("#java-button").click( function(event){
		$("#java-panel").fadeToggle();
	});
	
	$("#android-button").click( function(event){
		$("#android-panel").fadeToggle();
	});
	
	$("#book-button").click( function(event){
		$("#book-panel").fadeToggle();
	});
	
	$('[data-toggle="tooltip"]').tooltip(); 

});
/*
	Helps to access to the differents parts of html document
*/
function Handler(){

};

/*
	Returns the value of the element with a specific id
*/
Handler.prototype.getValueFrom = function(id){
	return document.getElementById(id).value;
};;

/*
	Show an error message with the content that is provided to it
*/
Handler.prototype.setErrorMessage = function(message){
	var alert = document.getElementById("alert");
	var alertText = document.getElementById("alertText");
	
	alertText.innerHTML = message;
	alert.setAttribute("style","");
};

/*
	Hide an error message if it was showing
*/
Handler.prototype.clearErrorMessage = function(){
	var alert = document.getElementById("alert");
	if(alert.getAttribute("style") === ""){
		alert.setAttribute("style","display: none");
	}
};
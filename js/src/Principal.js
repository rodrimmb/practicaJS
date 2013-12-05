var fields = ["textarea", "numeric", "email", "dni", "phone", "date", "checkbox", "radio"];
var message = "";

var validator = new Validator();
var handler = new Handler();
var values = new Object();

var moreThanOneError = false;

/*
	Read all the inputs and evaluate all their values. 
*/
function fieldsEvaluation(){
	handler.clearErrorMessage();
	fields.forEach(function(val){
		switch(val){
			case "textarea":
				if(validator.isTextareaEmpty(handler.getValueFrom(val))){
					message += "El primer campo es obligatorio";
					moreThanOneError = true;
				}else{
					values[val] = handler.getValueFrom(val);
				}
				break;

			case "numeric":
				checkTheField(validator.isANumber(handler.getValueFrom(val)), 
							  val,
							  "El segundo campo debe ser solo numerico");
				break;

			case "email":
				checkTheField(validator.isAnEmail(handler.getValueFrom(val)), 
							  val,
							  "La estructura del email no es correcta");
				break;

			case "dni":
				checkTheField(validator.isAValidDNI(handler.getValueFrom(val)), 
							  val,
							  "La estructura del DNI no es correcta");
				break;

			case "phone":
				checkTheField(validator.isAValidPhone(handler.getValueFrom(val)), 
							  val, 
							  "El numero de telefono introducido no es correcto");
				break;

			case "date":
				values[val] = document.getElementById(val).value;
				break;

			case "checkbox":
				values[val] = document.getElementById(val).checked;
				break;

			case "radio":
				radioButtons = document.getElementById(val).optionsRadios;
				
				for (i = 0; i < radioButtons.length; i++){
        			if (radioButtons[i].checked) {
            			values[val] = radioButtons[i].value;
        			}
    			}

				break;
		}
	});
	
	if(message){
		handler.setErrorMessage(message);
		message = "";
		moreThanOneError = false;
	}else{
		showCorrectValues();
	}
};

/*
	Show all the values in the HTML document.
*/
function showCorrectValues(){
	var showValues = document.getElementById("show_values");
		showValues.setAttribute("style", "");
		fields.forEach(function(val){
			var paragraph = document.getElementById("show_"+val);
			paragraph.innerHTML = values[val];
		});
}

/*
	Isolate repeated code that show an alert if something is wrong or save
	the values if everything is correct.
*/
function checkTheField(isValid, field, errorMessage){
	if(!isValid && handler.getValueFrom(field).length){
		if(!moreThanOneError){
			message += errorMessage;
			moreThanOneError = true;
		}else{
			message += ", " + errorMessage;
		}
	}else{
		values[field] = handler.getValueFrom(field);
	}
}

/*
	This function helps to test the aplication.
	It return the values that we save.
*/
function getValues(){
	return values;
};


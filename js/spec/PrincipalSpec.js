describe("The errors are displayed properly", function() {

	var validator;

	var alert;
	var alertText;

	var textarea;
	var number;
	var email;
	var dni;
	var phone;

	var date;

	var check;
	
	var radioButtons;
	var optionOne;
	var optionTwo;

	beforeEach(function() {
    	validator = new Validator();

    	alert = document.createElement("div");
		alert.setAttribute("id","alert");
		alert.setAttribute("style","display: none");

		alertText = document.createElement("p");
		alertText.setAttribute("id","alertText");
		alert.appendChild(alertText);

    	document.body.appendChild(alert);

		textarea = document.createElement("textarea");
		textarea.setAttribute("id","textarea");
    	document.body.appendChild(textarea);

		number = document.createElement("input");
    	number.setAttribute("id","numeric");
		number.setAttribute("type","text");
		document.body.appendChild(number);;

		email = document.createElement("input");
    	email.setAttribute("id","email");
		email.setAttribute("type","text");
		document.body.appendChild(email);

		dni = document.createElement("input");
    	dni.setAttribute("id","dni");
		dni.setAttribute("type","text");
		document.body.appendChild(dni);
		
		phone = document.createElement("input");
    	phone.setAttribute("id","phone");
		phone.setAttribute("type","text");
		document.body.appendChild(phone);

		date = document.createElement("input");
    	date.setAttribute("id","date");
		date.setAttribute("type","text");
		document.body.appendChild(date);

		check = document.createElement("input");
    	check.setAttribute("id","checkbox");
		check.setAttribute("type","checkbox");
		document.body.appendChild(check);

		radioButtons = document.createElement("form");
    	radioButtons.setAttribute("id","radio");
		
    	optionOne = document.createElement("input");
    	optionOne.setAttribute("type","radio");
    	optionOne.setAttribute("name","optionsRadios");
    	optionOne.setAttribute("value","opcion 1");

    	optionTwo = document.createElement("input");
    	optionTwo.setAttribute("type","radio");
    	optionTwo.setAttribute("name","optionsRadios");
    	optionTwo.setAttribute("value","opcion 2");

    	radioButtons.appendChild(optionOne);
    	radioButtons.appendChild(optionTwo);

		document.body.appendChild(radioButtons);    	
  	});

	afterEach(function(){
		document.body.removeChild(alert);
		document.body.removeChild(textarea);
		document.body.removeChild(number);
		document.body.removeChild(email);
		document.body.removeChild(dni);
		document.body.removeChild(phone);
		document.body.removeChild(date);
		document.body.removeChild(check);
		document.body.removeChild(radioButtons);
  	});

	it("should detect that the textarea field hasn\'t any value", function() {
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("El primer campo es obligatorio");
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should detect that numeric field hasn\'t a valid value", function() {
		textarea.value = "Hello word";
		number.value = "12d3";
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("El segundo campo debe ser solo numerico");
		expect(alert.getAttribute("style")).toBe("");
		expect(getValues()["textarea"]).toBe("Hello word");
	})

	it("should detect that there are 2 errors one in the first field and other in the second field", function() {
		number.value = "12d3";
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("El primer campo es obligatorio, El segundo campo debe ser solo numerico");
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should detect that there is an error in the email structure", function() {
		textarea.value = "Hello word";
		email.value = "email@@mail.comm";
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("La estructura del email no es correcta");
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should detect that DNI has a correct structure", function() {
		textarea.value = "Hello word";
		dni.value = "71293949W";
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("La estructura del DNI no es correcta");
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should detect that there arn\'t text in the first field, the second field is not a number," +
		" the third field is not a correct mail and the dni is not correct", function() {
		dni.value = "71293949W";
		email.value = "email@@mail.comm";
		number.value = "12d3";
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("El primer campo es obligatorio, El segundo campo debe ser solo numerico" +
									", La estructura del email no es correcta, La estructura del DNI no es correcta");
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should detect that the telephone has an incorrect structure when it not start by 6 or 9", function() {
		textarea.value = "Hello word";
		phone.value = "865300345";
		fieldsEvaluation();

		expect(alertText.innerHTML).toBe("El numero de telefono introducido no es correcto");
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should detect that the checkbox is not checked", function() {
		fieldsEvaluation();

		expect(check.checked).toBe(false);
		expect(getValues()["checkbox"]).toBe(false);
	})

	it("should detect that the checkbox is checked", function() {
		check.checked = true;
		fieldsEvaluation();

		expect(check.checked).toBe(true);
		expect(getValues()["checkbox"]).toBe(true);
	})

	it("should detect which radio button is checked", function() {
		optionOne.setAttribute("checked", true);		
		fieldsEvaluation();

		expect(optionOne.checked).toBe(true);
		expect(optionTwo.checked).toBe(false);
		expect(getValues()["radio"]).toBe("opcion 1");
	})
});
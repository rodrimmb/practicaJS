describe("We can access to the diferents parts of HTML document", function(){

	var handler;
	var fakeTextarea;
	var fakeInput;

	var alert;
	var alertText;

	beforeEach(function() {
    	handler = new Handler();

    	fakeTextarea = document.createElement("textarea");
    	fakeTextarea.setAttribute("id","textarea");
    	document.body.appendChild(fakeTextarea);

    	fakeInput = document.createElement("input");
    	fakeInput.setAttribute("id","numeric");
		fakeInput.setAttribute("type","text");
		document.body.appendChild(fakeInput);

		alert = document.createElement("div");
		alert.setAttribute("id","alert");
		alert.setAttribute("style","display: none");

		alertText = document.createElement("p");
		alertText.setAttribute("id","alertText");
		alert.appendChild(alertText);

    	document.body.appendChild(alert);
  	});

  	afterEach(function(){
  		document.body.removeChild(fakeTextarea);
  		document.body.removeChild(fakeInput);
  		document.body.removeChild(alert);
  	});

	it("should get text from textarea by id in an html document and textarea is empty", function() {

		expect(handler.getValueFrom("textarea")).toBe("");
	})

	it("should get text from textarea by id in an html document and textarea has \"Hello\"", function() {
		var value = "Hello";
		fakeTextarea.value = value;

		expect(handler.getValueFrom("textarea")).toBe(value);
	})

	it("should get text from any input in an html document by id", function() {
		var value = "1234";
		fakeInput.value = value;
		
		expect(handler.getValueFrom("numeric")).toBe(value);
	})

	it("should show an alert message", function() {
		var message = "There are an error";
		handler.setErrorMessage(message);

		expect(alertText.innerHTML).toBe(message);
		expect(alert.getAttribute("style")).toBe("");
	})

	it("should show and after hide an alert message", function() {
		var message = "There are an error";
		handler.setErrorMessage(message);

		expect(alertText.innerHTML).toBe(message);
		expect(alert.getAttribute("style")).toBe("");

		handler.clearErrorMessage();

		expect(alert.getAttribute("style")).toBe("display: none");
	})
});
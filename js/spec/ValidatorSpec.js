describe("Validate that the fields has a corrects values", function() {

	var validator;

	beforeEach(function() {
    	validator = new Validator();
  	});

	it("should be detect if has a text", function() {
		var text = "This is some try text";

	    expect(validator.isTextareaEmpty(text)).toBe(false);
  	});

  	it("should be detect if has no text", function() {
		var text = "";

	    expect(validator.isTextareaEmpty(text)).toBe(true);
  	});

  	it("should detect that the string: \"12395745\" only has numbers", function() {
  		var text = "12395745";

  		expect(validator.isANumber(text)).toBe(true);
  	});

  	it("should detect that the string: \"123a5745\" has one letter", function() {
  		var text = "123a5745";

  		expect(validator.isANumber(text)).toBe(false);
  	});

  	it("should detect that the string: \"1235745@\" has one special character", function() {
  		var text = "1235745@";

  		expect(validator.isANumber(text)).toBe(false);
  	});

  	it("should detect a extra large number", function() {
  		var text = "123574578631576165893174658347561837017457316458147658716387361613431498273468123641";

  		expect(validator.isANumber(text)).toBe(true);
  	});

  	it("shold be detect that this string: \"tryEmail@mail.com\" has an email structure", function() {
  		var text = "tryEmail@mail.com";

  		expect(validator.isAnEmail(text)).toBe(true);
  	});

  	it("shold be detect that this string: \"tryEmail@mail\" hasn\'t an email structure", function() {
  		var text = "tryEmail@mail";

  		expect(validator.isAnEmail(text)).toBe(false);
  	});

  	it("shold be detect that this string: \"abc0001@alu.ubu.es\" has an email structure", function() {
  		var text = "abc0001@alu.ubu.es";

  		expect(validator.isAnEmail(text)).toBe(true);
  	});

  	it("shold be detect that this string: \"tryEmail@@mail.com\" hasn\'t an email structure", function() {
  		var text = "tryEmail@@mail.com";

  		expect(validator.isAnEmail(text)).toBe(false);
  	});

  	it("shold be detect that those DNIs: \"71293949k\", \"71293949K\" are valid", function() {
  		var dni1 = "71293949k";
  		var dni2 = "71293949K";

  		expect(validator.isAValidDNI(dni1)).toBe(true);
  		expect(validator.isAValidDNI(dni2)).toBe(true);
  	});

  	it("shold be detect that those DNIs: \"71293949l\", \"71293949L\" are invalid", function() {
  		var dni1 = "71293949l";
  		var dni2 = "71293949L";

  		expect(validator.isAValidDNI(dni1)).toBe(false);
  		expect(validator.isAValidDNI(dni2)).toBe(false);
  	});

	it("shold be detect that those DNIs: \"712949l\", \"712949L\" are invalid", function() {
  		var dni1 = "712949l";
  		var dni2 = "712949L";

  		expect(validator.isAValidDNI(dni1)).toBe(false);
  		expect(validator.isAValidDNI(dni2)).toBe(false);
  	});

  	it("should be detect that this: \"947100011\" is a spanish telephone", function() {
  		var telephone = "947100011";

  		expect(validator.isAValidPhone(telephone)).toBe(true);
  	})

  	it("should be detect that this: \"647100011\" is a spanish telephone", function() {
  		var telephone = "647100011";

  		expect(validator.isAValidPhone(telephone)).toBe(true);
  	})  	
});
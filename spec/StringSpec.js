describe("String Class extension", function() {

  describe("hasVowels method", function() {
      it("should indicate the presence of a vowel", function() {
        expect('tests'.hasVowels()).toEqual(jasmine.any(Boolean));
        expect('flight'.hasVowels()).toBe(true);
        expect('?/.45t'.hasVowels()).toBe(false);
        expect('IMPACT'.hasVowels()).toBe(true);
      });
  });

  describe("toUpper method", function() {
      it("should change characters from lower to upper case", function() {
        expect('tests'.toUpper()).toEqual(jasmine.any(String));
        expect('flight'.toUpper()).toEqual('FLIGHT');
        expect('flight OF denzel: part i.'.toUpper()).toEqual('FLIGHT OF DENZEL: PART I.');
      });
  });

  describe("toLower method", function() {
      it("should change characters from upper to lower case", function() {
        expect('TESting'.toLower()).toEqual(jasmine.any(String));
        expect('CRIMSON'.toLower()).toEqual('crimson');
        expect('FLIGHT OF DENZEL: PART I.'.toLower()).toEqual('flight of denzel: part i.');
      });
  });

  describe("ucFirst method", function() {
      it("should capitalise first character of a string where applicable", function() {
        expect('string life'.ucFirst()).toEqual(jasmine.any(String));
        expect('this is a test'.ucFirst()).toEqual('This is a test');
        expect('*ufedojo'.ucFirst()).toEqual('*ufedojo');
        expect('ufedojo'.ucFirst()).toEqual('Ufedojo');
      });
  });

  describe("isQuestion method", function() {
      it("should check if a string is a question(ends with ?) ", function() {
        expect('tests?'.isQuestion()).toEqual(jasmine.any(Boolean));
        expect('When are you asking me out?'.isQuestion()).toBe(true);
        expect('I never planned to do so.'.isQuestion()).toBe(false);
      });
  });

  describe("words method", function() {
      it("should return an array of words that make up the string ", function() {
        expect('TESting could be fun'.words()).toEqual(jasmine.any(Object));
        expect('TESting'.words()).toEqual(jasmine.any(Array));
        expect('When are you asking me out?'.words()).toEqual(['When','are','you','asking','me','out']);
      });
  });

  describe("wordCount method", function() {
      it("should return the number of words that make up the string ", function() {
        expect('how many words do you count?'.wordCount()).toEqual(jasmine.any(Number));
        expect('how many words do you count?'.wordCount()).toBe(6);
      });
  });

  describe("toCurrency method", function() {
      it("should ", function() {
        expect('18795.45'.toCurrency()).toEqual(jasmine.any(String));
        expect('56789.10'.toCurrency()).toBe('56,789.10');
      });
  });

  describe("fromCurrency method", function() {
      it("should return only figures and decimal point", function() {
        expect('11,111.50'.fromCurrency()).toEqual(jasmine.any(Number));
        expect('11,111.50'.fromCurrency()).toEqual(11111.50);
        expect('@66,611,1b11.5/x0'.fromCurrency()).toEqual(66611111.50);
      });
  });
});
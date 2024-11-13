import { Main } from '../src/app.js';

describe("Berlin Clock - Simple Minutes Line , ", function() {
    const main = new Main();

    it("should turn off all lamps if minutes are 0", function () {

        const result = main.simpleMinutesLine(0);

        expect(result).toEqual("OOOO");
      });
      
    it("should turn on a light if the minutes are 1", function () {

        const result = main.simpleMinutesLine(1);

        expect(result).toEqual("YOOO");
    });

    it("should turn on two lights if the minutes are 2", function () {

        const result = main.simpleMinutesLine(2);

        expect(result).toEqual("YYOO");
    });

    it("should turn on three lights if the minutes are 3", function () {

        const result = main.simpleMinutesLine(3);

        expect(result).toEqual("YYYO");
    });
    
    it("should turn on four lights if the minutes are 4", function () {

        const result = main.simpleMinutesLine(4);

        expect(result).toEqual("YYYY");
    });

    it("should work the same for minutes greater than 4", function () {
        expect(main.simpleMinutesLine(5)).toEqual("OOOO"); 
        expect(main.simpleMinutesLine(6)).toEqual("YOOO"); 
        expect(main.simpleMinutesLine(7)).toEqual("YYOO"); 
        expect(main.simpleMinutesLine(8)).toEqual("YYYO"); 
        expect(main.simpleMinutesLine(9)).toEqual("YYYY"); 
    });

describe("Five Minutes Line", function () {

    it("should turn off all lamps when minutes are 0", function () {

        const result = main.fiveMinutesLine(0);

        expect(result).toEqual("OOOOOOOOOOO");
    });

    it("should turn off all lamps when minutes are 5", function () {

        const result = main.fiveMinutesLine(5);

        expect(result).toEqual("YOOOOOOOOOO");
    });
    });

});
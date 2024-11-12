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
    
});
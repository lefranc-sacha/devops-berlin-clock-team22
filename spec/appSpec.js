import { Main } from '../src/app.js';

describe("Berlin Clock - Simple Minutes Line , ", function() {
    const main = new Main();

    it("should turn off all lamps if minutes are 0", function () {

        const result = main.simpleMinutesLine(0);

        expect(result).toEqual("OOOO");
      });
});
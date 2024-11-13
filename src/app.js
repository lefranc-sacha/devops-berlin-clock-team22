export class Main{

    simpleMinutesLine(minutes){

        const onLamps = minutes % 5; 
        
        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    fiveMinutesLine(minutes) {
        const onLamps = Math.floor(minutes / 5);
        let lamps = "";
        for (let i = 1; i <= 11; i++) {
          if (i <= onLamps) {
            lamps += (i % 3 === 0) ? "R" : "Y";
          } else {
            lamps += "O";
          }
        }
        return lamps;
    }

    simpleHoursLine(hours) {

        const onLamps = hours % 5;

        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);

    }

    fiveHoursLine(hours) {

        return "OOOO";
        
    }
      
}
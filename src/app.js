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

        if (hours === 0) return "OOOO";
        
        if (hours === 1) return "ROOO";

        if (hours === 2) return "RROO";

        if (hours === 3) return "RRRO";

        if (hours === 4) return "RRRR";
    
        return "OOOO";
    }
      
}
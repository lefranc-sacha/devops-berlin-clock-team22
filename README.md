# Berlin Clock Project - Team 22

Authors

  Group Number: 22
  
  Members:
  
    Ismet Ismet,
    
    Lefranc Sacha,
    
    Marica Livius,

Project Description
  This project implements a Berlin Clock, a unique clock format that uses rows of lamps to represent the time. 
  The Berlin Clock divides time into rows for hours and minutes, lighting up lamps according to specific intervals. 
  This implementation allows us to determine the display of the clock based on the given hours, minutes, and seconds.

Features:

  simpleMinutesLine: Indicates minutes from 1 to 4 in the bottom row of the clock with four yellow lamps.
  
  fiveMinutesLine: Indicates 5-minute blocks up to 55 minutes with 11 lamps (yellow and red).
  
  simpleHoursLine: Indicates hours from 1 to 4 with four red lamps.
  
  fiveHoursLine: Indicates 5-hour blocks with four red lamps.
  
  secondsLamp: Indicates even seconds (lamp lit in yellow) and odd seconds (lamp off).
  
  berlinClock: Generates the full display of the Berlin Clock for a given time.
  
Prerequisites:

  Node.js: Version 14+ (tested on Node.js 16+)
  
  Jasmine: For running tests (included in package.json as a development dependency)
  
Installation:

  Clone the repository:
  
  git clone https://github.com/lefranc-sacha/devops-berlin-clock-team22.git
  
Install dependencies:

  npm install
  
Code Structure:

  app.js: Contains the main Main class with the Berlin Clock methods for calculation and display.
  
  appSpec.js: Test file using Jasmine to validate each method's behavior.
  
  package.json: Project configuration file, including test scripts and dependency information.

Running the Code:

To display the Berlin Clock for a given time, use the berlinClock method in app.js.

For example:

  const clock = new Main();
  
  console.log(clock.berlinClock(9, 32, 15)); // Example for 09:32:15

Running the Tests:

  The project includes tests for each Berlin Clock feature.
  
  To run the tests, use the following command:
  
    - npm run test

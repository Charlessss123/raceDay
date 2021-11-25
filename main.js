let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;

if (runnersAge > 18 && registeredEarly){
  raceNumber += 1000;
} else {
  raceNumber += 0;
}

if(runnersAge > 18 && registeredEarly){
  console.log(`Race number: ${raceNumber} will race at 9:30am`)
} else if (runnersAge > 18 && !registeredEarly){
  console.log(`Race number: ${raceNumber} will race at 11:00am  `)
} else if (runnersAge <= 18){
  console.log(`Race number: ${raceNumber} will race at 12:30pm `)
}

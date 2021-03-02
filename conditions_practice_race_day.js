let raceNumber = Math.floor(Math.random() * 1000);

let regisEarly = true;

let runnerAge = 17;

if(runnerAge > 18 && regisEarly){
  console.log(raceNumber += 1000);
}

if(runnerAge > 18 && regisEalry){
  console.log(`Participant ${raceNumber}: Your race will bein at 9:30.`);
} else if(runnerAge > 18 && !regisEarly){
  console.log(`Participant ${raceNumber}: Your race will bein at 11:00.`);
} else if(runnerAge < 18){
  console.log(`Participant ${raceNumber}: Your race will bein at 12:30.`);
} else{
  console.log(`Participant ${raceNumber}: Please consult the registration desk.`);
}

 

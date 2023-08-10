function scuberGreetingForFeet(ride){

  let sample

  if (ride <= 400) {
    sample = 'This one is on me!';
  } else if (ride > 400 && ride < 2000) {
    sample = 'That will be twenty bucks.';
  } else if (ride > 2000 && ride < 2500) {
    sample = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    sample = 'No can do.'
  }
  return sample
}

function ternaryCheckCity(city){
  return city === 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(generous){
  switch(generous){
		case 'generous' :
			return 'Thank you so much.'
		case 'not as generous' :
			return 'Thank you.'
		default : 
			return `Bye.`
	}
}
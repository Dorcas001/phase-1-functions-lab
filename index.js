// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
        return distance- 42
    } else {
        return 42 - distance
      

    }

}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264 
  
  }
  function distanceTravelledInFeet (start, destination){
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet(start,destination);
  
  if(distance <= 400){
      return 0
  }else if(distance > 400 && distance < 2000){
      return (distance - 400) * 0.02
  }else if(distance > 2000 && distance < 2500){
      return 25
  }else if(distance>2500){
      return 'cannot travel that far'
  }
}


// function calculatesFarePrice (start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
  
//     if (distance <= 400) {
//       return 0;
//     } else if (distance > 400 && distance <= 2000) {
//       return .02 * (distance - 400);
//     } else if (distance > 2000 && distance < 2500) {
//       return 25;
//     } else {
//       return 'cannot travel that far';
//     }
//   }

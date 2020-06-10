module.exports.checkInformationsCard = function (cardInformations) {
  
  if(cardInformations.length !== 3){
    return false
  }
  if(cardInformations[0].length !==16){
    return false
  }
  if(cardInformations[1].length !== 5 || cardInformations[1][2] !== '/'){
    return false
  }
  if(cardInformations[1].substring(0,2) > 12 || cardInformations[1].substring(3,5) > 31){
    return false
  }
  if(cardInformations[2].length !==3){
    return false
  }
  
  return true

}

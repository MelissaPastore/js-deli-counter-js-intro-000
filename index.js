function takeANumber (currLine, newPerson) {
  currLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currLine.length} in line.` 
}

function nowServing (currLine){
  if(currLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  
  else {
    return `Currently serving ${currLine.shift()}.`;
  }
}

function currentLine (currLine) {
  if(currLine.length === 0){
    return 'The line is currently empty.'
  }
  let greeting = 'The line is currently: '
  currLine.forEach()

  return greeting; 
}
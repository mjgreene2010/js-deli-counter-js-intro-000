function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0){
  return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
    }
  
}

function currentLine(line){
  if (line.length < 1){
  return 'This line is currently empty.'
  } else {
    let output = 'The line is currently: '
    for(var i = 0; i < line.length; i++){
      output ++ `${i+1}. ${line[i]} `
    }
    return output.slice(0, -1)
  }
}
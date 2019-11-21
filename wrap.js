const wrap = (line, maxLength) => {
  if(line === ''){
    return line;
  }
  else if(line.length <= maxLength){
    return line;
  }
  else if (line.length > maxLength){
    let string = line.slice(0, maxLength) + '/n'  + line.slice(maxLength+1, -1);console.log(string);
    return string;
  }

}
module.exports = wrap;

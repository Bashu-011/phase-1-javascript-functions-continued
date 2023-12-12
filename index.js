function saturdayFun(fun = "roller-skate"){
    return( `This Saturday, I want to ${fun}!`);
}

function mondayWork(fun = 'go to the office'){
    return(`This Monday, I will ${fun}.`);
}

function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
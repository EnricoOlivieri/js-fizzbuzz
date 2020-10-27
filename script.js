var message;

for(var counter = 1; counter <= 100; counter++){

  message = counter;

  if((counter % 3 == 0) && (counter % 5 == 0)){
    message = FIZZ + BUZZ;
  }else(counter % 3 == 0){
    message = FIZZ;
  }if else(counter % 5 == 0){
    message = BUZZ;
  }
}

getElementsById('numbers').innerHTML += '<li>' +message+ '</li>';

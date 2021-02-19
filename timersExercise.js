
function countDown(num){
    let timer= setInterval(function(){
      num--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(num);
      };
  
    },1000)
  }
  
//randomGame function
function randomGame(){
    let num;
    let counter = 0;
    let timer = setInterval(function(){
      num = Math.random();
      counter+=1;
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + counter + " try/tries.");
      }
    },1000)
  }



'use strict';{
  const timer = document.getElementById('timer');
  const title = document.getElementById('title');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const hours = document.getElementById('hours');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp(){
    const d = new Date(Date.now() - startTime + elapsedTime );
    // const h = String(d.getHours()).padStart(1,'0');
    const h = d.getUTCHours();
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');

   timer.textContent = `${m}:${s}`;
   title.textContent = `${m}:${s}`;
   hours.textContent = `${h}`;
   timeoutId = setTimeout(() => {
     countUp(),10});
  }


  start.addEventListener('click', () => {
    start.classList.add('hide');
    stop.classList.add('show');
    startTime = Date.now();
    countUp();    
  })
  
  stop.addEventListener('click',() =>{
    start.classList.remove('hide');
    stop.classList.remove('show');
    
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });
}


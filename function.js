
// Get and assign elements from HTML
const timerDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

// Create and assign varibales to use
let startTime = 0;
let elapseTime = 0;
let currentTime = 0;
let pause = true;
let interValId;
let hours = 0;
let minutes = 0;
let seconds = 0;

//This is to start the timer

startBtn.addEventListener("click", () => {
		if(pause){
    		pause = false;
        startTime = Date.now() - elapseTime;
        interValId = setInterval(updateTime, 75);
    	
    }
});

//This is to pause the timer
pauseBtn.addEventListener("click", () => {
	if(!pause){
  		pause = true;
      elapseTime = Date.now() - startTime;
      clearInterval(interValId);
  }

});

//This is to Reset the timer
resetBtn.addEventListener("click", () => {
	pause = true;
  clearInterval(interValId);
  startTime = 0;
	elapseTime = 0;
	currentTime = 0;	
	hours = 0;
	minutes = 0;
	seconds = 0;  
  timeDisplay.textContent = "00:00:00";

});

//FUnction use to update the timer
function updateTime (){
		elapseTime = Date.now() - startTime;
    
    
    seconds = Math.floor((elapseTime / 1000) % 60);
    minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    hours = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);
    
    seconds = frontZero(seconds);
    minutes = frontZero(minutes);
    hours = frontZero(hours);
    
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    
    //Function to add a 0 in front of timer if it is below 10
    function frontZero (unit) {
    	return (("0") + unit).length > 2 ? unit : "0" + unit;
    
    }

}


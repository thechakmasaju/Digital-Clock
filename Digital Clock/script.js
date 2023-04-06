// Define a function called "updateClock" that will be responsible for updating the clock every second
function updateClock() {

    // Create a new Date object to get the current time
    const now = new Date();
  
    // Extract the hours, minutes, and seconds from the Date object
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Use string manipulation to format the hours, minutes, and seconds into a string with the format "HH:MM:SS"
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    const time = hours + ":" + minutes + ":" + seconds;
  
    // Use the innerHTML property of the HTML <div> element with the id of "clock" to display the formatted time in the clock
    document.getElementById("clock").innerHTML = time;
  }
  
  // Call the "updateClock" function once to initialize the clock
  updateClock();
  
  // Use the setInterval() method to call the "updateClock" function every second to update the clock
  setInterval(updateClock, 1000);
  
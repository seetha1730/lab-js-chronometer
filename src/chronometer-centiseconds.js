class Chronometer {
  constructor() {
 // ... your code goes here
  
      this.currentTime = 0;
      this.intervalId = null;
    }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/100/60)
  }

  getSeconds() {
    // ... your code goes here
    //console.log(this.currentTime/100%60)
  return Math.floor(this.currentTime/100%60);
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
    
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if (value.length === 1) {
      value = "0" + value;
    }
    return value;
    // ... your code goes here
    
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${min}:${sec}.${centiseconds}`;
  }
}
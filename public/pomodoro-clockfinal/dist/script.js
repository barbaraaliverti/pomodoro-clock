const projectName = 'Pomodoro Clock';

function AdjustTime(props) {

  function handleDecrease() {
    if (props.length == 1) {
      return props.length;
    } else {
      return props.length - 1;
    }
  };

  function handleIncrease() {
    if (props.length == 60) {
      return props.length;
    } else {
      return props.length + 1;
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: `${props.type}-container` }, /*#__PURE__*/
    React.createElement("h4", { id: `${props.type}-label` }, props.type, " length"), /*#__PURE__*/
    React.createElement("div", { id: "length-container", className: "center-flex" }, /*#__PURE__*/
    React.createElement("button", { id: `${props.type}-decrement`, onClick: () => props.setLength(handleDecrease()), disabled: props.timerStatus !== 'stopped' }, "-"), /*#__PURE__*/
    React.createElement("h2", { id: `${props.type}-length` }, props.length), /*#__PURE__*/
    React.createElement("button", { id: `${props.type}-increment`, onClick: () => props.setLength(handleIncrease()), disabled: props.timerStatus !== 'stopped' }, "+")), /*#__PURE__*/

    React.createElement("h4", null, props.length > 1 ? 'minutes' : 'minute')));


};

function App() {
  const [sessionLength, setSessionLength] = React.useState(25);
  const [breakLength, setBreakLength] = React.useState(5);
  const [timeLeft, setTimeLeft] = React.useState({ minutes: sessionLength, seconds: 0 });
  const [isSession, setIsSession] = React.useState(true);
  const [isTimerRunning, setIsTimerRunning] = React.useState('stopped'); //'stopped', 'running' or 'paused'
  const [initialTime, setInitialTime] = React.useState(0);

  //calculates time left
  function calculateTimeLeft(futureTime) {
    const difference = futureTime - +new Date();

    let time = {};

    if (difference >= 0) {
      time = {
        minutes: Math.floor(difference / (1000 * 60) % 60),
        seconds: Math.floor(difference / 1000 % 60) };

    }
    return time;
  };

  //useEffect will update if timer is running
  React.useEffect(() => {
    let intervalId;
    if (isTimerRunning == 'running') {
      intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft(initialTime));
      }, 500);
    };

    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  React.useEffect(() => {
    if (timeLeft['minutes'] == 0 && timeLeft['seconds'] == 0) {
      this.audioBeep.play();
    }
    if (timeLeft['minutes'] == undefined && timeLeft['seconds'] == undefined) {
      setIsTimerRunning('finished');
      setIsSession(!isSession);
    }
  }, [timeLeft]);

  //play when session/break is toggled
  React.useEffect(() => {
    if (isTimerRunning == 'finished') {
      play();
    }
  }, [isSession]);

  //format time mm:ss
  const formatTime = timeLeft => {
    let minutes;
    let seconds;
    if (timeLeft["minutes"]) {
      minutes = timeLeft["minutes"] < 10 ? '0' + timeLeft["minutes"] : timeLeft["minutes"];
    } else {
      minutes = '00';
    }
    if (timeLeft["seconds"]) {
      seconds = timeLeft["seconds"] < 10 ? '0' + timeLeft["seconds"] : timeLeft["seconds"];
    } else {
      seconds = '00';
    }
    return minutes + ":" + seconds;
  };

  //
  function checkSession() {
    if (isSession) {
      return sessionLength;
    } else {
      return breakLength;
    }
  };

  //timer controllers
  function reset() {
    setIsTimerRunning('stopped');
    //stop audio beep
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    //back to initial states
    setIsSession(true);
    setSessionLength(25);
    setBreakLength(5);
  };

  function pause() {
    setIsTimerRunning('paused');
  };

  function play() {
    setIsTimerRunning('running');
    setInitialTime(+new Date() + checkSession() * 60 * 1000);
    setTimeLeft({ minutes: checkSession(), seconds: 0 });
  };

  function resume() {
    setIsTimerRunning('running');
    setInitialTime(+new Date() + timeLeft['minutes'] * 60 * 1000 + timeLeft['seconds'] * 1000);
  };

  function timerControls() {
    if (isTimerRunning == 'stopped') {
      return play();
    } else if (isTimerRunning == 'running') {
      return pause();
    } else {
      return resume();
    }
  };
  //end of timer controllers


  function timerDisplay() {
    console.log(timeLeft);
    if (isTimerRunning == 'stopped') {
      return (
        (isSession ? sessionLength < 10 ? '0' + sessionLength : sessionLength : breakLength < 10 ? '0' + breakLength : breakLength) + ':00');

    } else {
      return formatTime(timeLeft);
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "wrapper", className: "center-flex" }, /*#__PURE__*/
    React.createElement("div", { id: "title", className: "center-flex" }, /*#__PURE__*/
    React.createElement("img", { id: "tomato", src: "https://i.imgur.com/wMjVFv5.png", alt: "Tomato with a happy face" }), /*#__PURE__*/
    React.createElement("h1", null, "pomodoro clock")), /*#__PURE__*/

    React.createElement("div", { id: "adjust-time-container", className: "center-flex" }, /*#__PURE__*/
    React.createElement(AdjustTime, {
      type: "session",
      length: sessionLength,
      setLength: setSessionLength,
      timerStatus: isTimerRunning }), /*#__PURE__*/

    React.createElement(AdjustTime, {
      type: "break",
      length: breakLength,
      setLength: setBreakLength,
      timerStatus: isTimerRunning })), /*#__PURE__*/


    React.createElement("div", { id: "timer-container", className: "center-flex" }, /*#__PURE__*/
    React.createElement("h3", { id: "timer-label" }, isSession ? 'Session' : 'Break'), /*#__PURE__*/
    React.createElement("h1", { id: "time-left" }, timerDisplay()), /*#__PURE__*/
    React.createElement("div", { id: "timer-controls" }, /*#__PURE__*/
    React.createElement("button", { id: "start_stop", onClick: () => timerControls() }, /*#__PURE__*/
    React.createElement("i", { class: "fas fa-play" }), /*#__PURE__*/
    React.createElement("i", { class: "fas fa-pause" })), /*#__PURE__*/

    React.createElement("button", { id: "reset", onClick: () => reset() }, /*#__PURE__*/
    React.createElement("i", { class: "fas fa-stop" })))), /*#__PURE__*/



    React.createElement("div", { id: "author-info" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("a", { href: "https://barbaraaliverti.github.io/", target: "_blank" }, "by baloobali "), /*#__PURE__*/
    React.createElement("a", { href: "https://www.freecodecamp.org/", target: "_blank" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-free-code-camp" })))), /*#__PURE__*/


    React.createElement("audio", {
      id: "beep",
      preload: "auto",
      ref: audio => {
        this.audioBeep = audio;
      },
      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
let ClockTime = () => {

  let time = new Date();

  return <p className="p2">This is the current time : {time.toLocaleDateString()} -{time.toLocaleTimeString()}</p>
};

export default ClockTime;
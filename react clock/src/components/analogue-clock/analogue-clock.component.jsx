import React,{useState,useEffect} from 'react';
import './analogue-clock.style.css';
import moment from 'moment';

 function AnalogueClock(props){
    const {timezone} = props;
     let date = new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
    const [hours,setHours] = useState((date.getHours() + 11) % 12 + 1);
    const [minutes,setMinutes] = useState(date.getMinutes());
    const [seconds,setSeconds] = useState(date.getSeconds());



     useEffect(() => {
         let interval = null;
         interval = setInterval(() => {
             date = new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
             setHours(((date.getHours() + 11) % 12 + 1));
             setMinutes( date.getMinutes());
             setSeconds(date.getSeconds());
         }, 1000);

         return () => clearInterval(interval);

     }, [minutes,hours, seconds]);



    return(
        <div className="analogue">
            <div className="clock">
                <div className="wrap">
                    <span className="hour" style={{transform: `rotate(${hours * 30}deg)`}}></span>
                    <span className="minute" style={{transform: `rotate(${minutes * 6}deg)`}}></span>
                    <span className="second" style={{transform: `rotate(${seconds * 6}deg)`}}></span>
                    <span className="dot"></span>
                </div>
            </div>
            <p className={"time-label"}>{moment(date).format("H:mm:ss a")}</p>

        </div>
    )
}

export default AnalogueClock;

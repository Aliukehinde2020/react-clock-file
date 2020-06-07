import React,{useState} from 'react';
import './analogue-clock.style.css';
import mom3ent from 'moment';

 function AnalogueClock(props){
    const {timezone} = props;
    const [date,setDate] = useState(new Date().toLocaleString("en-US", {timeZone: timezone}))

const hours = ((date.getHours() + 11) % 12 + 1)
const minutes = date.getMinutes();
const seconds = date.getSeconds();
 const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

    return(
        <div class="clock">
            <div class="wrap">
                <span class="hour" style={{transform:`rotate(${hour}deg)`}}></span>
                <span class="minute"></span>
                <span class="second"></span>
                <span class="dot"></span>
            </div>
        </div>
    )
}

export default AnalogueClock;
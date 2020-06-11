import React from 'react';

import './clock-select.style.css';
const ClockSelect = (props)=>{
    const {name,id,onChange,value,timezones} = props;
    return (
        <select name={name} value={value} id={id}
        onChange={(event)=>onChange(event.target.value)} required>
            <option value="">--Select Timezone--</option>
            {
                timezones.map((time,index)=>{
                    return(
                    <option key={index} value={time}>{time}</option>

                    )
                })
            }
        </select>
    )
};

export default ClockSelect;

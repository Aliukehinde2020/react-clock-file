import React from 'react';
import './clock-body.style.css';

import ClockContainer from '../../components/clock-body/clock-container/clock-container.component';

const ClockBody = ()=>{
    return(
        <div className="clock-body">
            <ClockContainer/>
        </div>
    )
};

export default ClockBody;
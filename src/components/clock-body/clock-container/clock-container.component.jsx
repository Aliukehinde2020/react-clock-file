import React,{useEffect,useState} from 'react';
import './clock-container.style.css';

import ClockSelect from '../../clock-select/clock-select.component';
import AnalogueClock from '../../analogue-clock/analogue-clock.component';

const ClockContainer = ()=>{
    const [timezones,setTimezone]  = useState([]);
    const [selectedZone,setSelectedZone]  = useState("");
    const [times,setTimes] = useState(JSON.parse(localStorage.getItem("user_times"))??[]);
    useEffect(()=>{
        fetch("http://worldtimeapi.org/api/timezone")
        .then(response=>{

            return response.json();

        }).then((data)=>{

            setTimezone(data);
        })
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(selectedZone!=="")
        {
            if(times.length >=4)
            {
                alert("You ca not add more than 4 time zones");
                return;
            }
            const existing_time = times.find(time=>time===selectedZone);
            if(existing_time)
            {
                alert(`You have added ${existing_time} timezone already`);
            }else{
               localStorage.setItem("user_times",JSON.stringify([...times,selectedZone]));
                setTimes([...times,selectedZone]);
                setSelectedZone("");
            }
        }else{
            alert("Time zone can not be empty");
        }
    }

    const removeTimezone=(selectedZone)=>{

        const filtered_times = times.filter(time=>time!==selectedZone);
        localStorage.setItem("user_times", JSON.stringify([...filtered_times]));
        setTimes([...filtered_times]);
    };
    return(
        <div className="clock-container">
            <h4>My World Clock</h4>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                <div className="form-row" >
                    <ClockSelect value={selectedZone} onChange={(value)=>setSelectedZone(value)} timezones={timezones} />
                    <div className="input-group">
                        <button  type="submit">Add Timezone</button>
                    </div>
                </div>
                </form>

                <div className="clock-list">
                   {
                       times.map((time,index)=>{
                           return(
                            <div key={index} className="clock-col">
                                <AnalogueClock timezone={time} />
                           <p className={"timezone-label"}>{time.replace("/"," - ")}</p>
                               <p style={{textAlign:"center"}}>
                                   <button type={"button"} onClick={()=>removeTimezone(time)} className={"remove"}>Remove</button>
                               </p>
                            </div>
                           )
                       })
                   }

                </div>
            </div>
        </div>
    )
};

export default ClockContainer;

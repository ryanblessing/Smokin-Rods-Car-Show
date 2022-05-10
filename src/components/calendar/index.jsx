import React, { useState, useEffect } from "react";

import buildCalendar from "./buildCalendar";
import dayStyles, {beforeToday} from "./dayStyles";
import Header from "./header"


export default function Calendar(value, onChange) {
    const [calendar, setCalendar] = useState([])
    

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])


    return (
        <div className="calender">
           <Header value={value} setValue={onChange}/>
            <div className="body">
                <div className="day-names">
                    {
                        ["s", "m", "t", "w", "T", "f", "s"].map(d=> <div className="week">{d}</div>)
                    }
                </div>
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
        
                                <div 
                                    className="day" 
                                    onClick={() => !beforeToday(day) && onChange(day)}>
                                    <div className={dayStyles(day, value)}>
                                        {day.format("D").toString()}
                                    </div>
                                </div>                          
                        ))}
                    </div>
                ))}
            </div>
        </div>

    )
}
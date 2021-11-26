import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/logos/invocom-log.png';
import Header from '../../Components/Header';
import Brand from '../../Components/Brand'
import '../../assets/styles/global.scss';
import Slider from "react-slick";
var moment = require('moment');
moment().format();

const FormScreen = () => {
  const [selectedDate , setSelectedDate] = useState("");
  const [selectedTime , setSelectedTime] = useState("");
    var settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      var settingsTime = {
       
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[show , setShow] = useState(true);
    const [date , setDate] = useState('');
      const [time , setTime] = useState('');
    const timeSlots = {
        nextSlot: 30,
        startTime: '8:00 ',
        endTime: '12:30 '
     };
     
     var slotTime = moment(timeSlots.startTime, "hh:mm a");
     var endTime = moment(timeSlots.endTime, "hh:mm a");
     
     let times = [];
     while (slotTime < endTime)
     {
      //if (!isInBreak(slotTime, timeSlots.breakTime)) {
         times.push(slotTime.format("hh:mm a"));
     // }
     slotTime = slotTime.add(timeSlots.nextSlot, 'minutes');
     }
           const days = []
           const dateStart = moment()
           const dateEnd = moment().add(7, 'days')
           while (dateEnd.diff(dateStart, 'days') >= 0) {
            days.push(dateStart._d.toString())
            dateStart.add(1, 'days')
           }  
               const renderDay = (day,id) => {
                  
                 const dayInfo = day.split(' ');
                 return  <div key={id} className="dates" onClick={ (e) => { setDate(day) 
                  setSelectedDate([...document.querySelectorAll('.date_active')].map(x => x.classList.remove("date_active")))
                  setSelectedDate(e.target.classList.add("date_active"))
                  console.log(dayInfo[0],",",dayInfo[2])
                }}
                >

                 {dayInfo[0]}<br/>{dayInfo[2]}
              </div >
               }
    return (
      <div className="complete_bot absolute">
          { show? 
        (          <div className="widget">
      <Header/>

        <div className="message_body message_body w-lg h-lg border border-primary border-b-0 relative overflow-y-auto">
            <div className="calendar_containe flex justify-center items-center h-full">
          <div className="calendar_body h-calender">
           <p><strong>Select Date & Time</strong></p>
           <p>(30 min meeting) <span> UTC +05:00 Islamabad, Karachi </span> </p>
           <p><strong>October 10, 2021</strong></p>
                <div className="slider_container flex justify-center">
                            <Slider className="date_slider" {...settings}>

                                
                                {days.map((day,id) =>
                              <div key={id} className="date_option">
                              {renderDay(day,id)}
                              
                          </div>
                           )}
                            </Slider>

                  </div>

                  <div className="slider_container flex justify-center py-4" style={{borderTop:'1px solid #1b3660', borderBottom:'1px solid #1b3660'}}>
                            <Slider className="date_slider" {...settingsTime}>

                                {times.map((slotTime,id) => {
                                  const selectTime = slotTime;
                                  return (
                        <div key={id} className="time_option" onClick={(e) => { setTime(slotTime)
                          setSelectedTime([...document.querySelectorAll('.time_active')].map(x => x.classList.remove("time_active")))
                          setSelectedTime(e.target.classList.add("time_active"))
                          console.log(selectTime)
                         }}>
                           <p>{slotTime}</p>
                           
                        </div >
                  )}
                  )}
                            </Slider>

                  </div>

                  <div className="slider_container flex justify-center">
                      <div className="slick_btn_container w-calBtn flex justify-between">
                        <button className="cancel-btn"> Cancel</button>
                      <Link to="/chat">  <button className="confirm-btn">Confirm</button></Link>
                      </div>
                  </div>
          </div> 
          </div>
        </div>
       <Brand />
        </div>)
        :
        ('')  
        }

          <img onClick={()=> setShow(!show)} src={logo} alt="" />
      </div>
    )
}

export default FormScreen

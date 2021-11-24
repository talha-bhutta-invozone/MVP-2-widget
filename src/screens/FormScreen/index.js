import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logos/invocom-log.png';
import Header from '../../Components/Header';
import Brand from '../../Components/Brand'
import '../../assets/styles/global.scss';

const FormScreen = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[show , setShow] = useState(true);
    return (
      <div className="complete_bot absolute">
          { show? 
        (          <div className="widget">
      <Header/>

        <div className="message_body w-lg h-lg border border-primary border-b-0 relative overflow-y-auto">
          <div className="form_body h-md flex justify-center items-center">
           <div className="form_container w-form">
             <p>fill in the details below and we'll zone in your project in no time!</p>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Username"/>
                <Link to ="/calendar">
                <button>Submit</button>
                </Link>
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

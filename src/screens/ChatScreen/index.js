import React, {useState} from 'react'
import logo from '../../assets/logos/invocom-log.png';
import Header from '../../Components/Header';
import Footer from '../../Components/FooterInput';
import '../../assets/styles/global.scss';

const Questions = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[show , setShow] = useState(true);
    return (
      <div className="complete_bot absolute">
          { show? 
        (          <div className="widget">
      <Header/>

        <div className="chat_body message_body w-lg h-md border border-primary border-b-0 relative overflow-y-auto">
          
          <div className="flex justify-start p-2">
              <div className="sent w-max p-3 pb-4 rounded-lg bg-secondary  break-all relative" >
                <p> Hi this is your agent! How may I help you?  </p>
                <small>11:15 pm</small>
              </div>
          </div>

          <div className="flex justify-start p-2">
              <div className="sent w-max p-3 pb-4 rounded-lg bg-secondary  break-all relative">
                <p> Hi this is your agent! How may I help you?  </p>
                <small>11:15 pm</small>
              </div>
          </div>

        

          <div className="flex justify-end p-2">    
              <div className="recieved w-max p-3 pb-4 rounded-lg bg-lightBlue  break-all relative">
                <p> Hi this is your agent! How may I help you? Hi this is your agent! How may I help you?Hi this is your agent! How may I help you?Hi this is your agent! How may I help you?Hi this is your agent! How may I help you?Hi this is your agent! How may I help you? </p>
                <small>11:15 pm</small>
              </div>
          </div>
       
        </div>
        <Footer />
       
        </div>)
        :
        ('')  
        }

          <img onClick={()=> setShow(!show)} src={logo} alt="" />
      </div>
    )
}

export default Questions

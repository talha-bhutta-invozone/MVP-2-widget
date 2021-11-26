/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logos/invocom-log.png';
import Header from '../../Components/Header';
import Brand from '../../Components/Brand';
import '../../assets/styles/global.scss';

const mainScreen = () => {
    const[show , setShow] = useState(false);
    const [showdialogue, setShowDialogue] = useState(true);

    const changeStates = () => {
      setShow(!show)
      setShowDialogue(false)
    }
    return (
      <div className="complete_bot absolute">
          
          { show? 
        (          <div className="widget">
            <Header />

        <div className="message_body w-lg h-lg border border-primary border-b-0 relative overflow-y-auto">
              <div className="welcome_message_container flex ">
      <img src={logo} alt="" />
        <div className="welcome_message w-md break-all bg-secondary p-4 relative rounded">
            <strong>Invocom</strong>
            <p>Welcome to Invzone!<br/>
            How may I help You today?
            </p>
            <span>11:35 AM</span>

        </div>
              </div>
        <div className="options_list absolute">
            <Link to="/second-screen">
            <div className="option max-w-md w-max break-all border border-primary rounded p-2 hover:bg-primary hover:text-white hover:cursor-pointer">
                <p>Service Info</p>
          </div>
          </Link>
          
          <Link to="/chat">
          <div className="option max-w-md w-max break-all border border-primary rounded p-2 hover:bg-primary hover:text-white hover:cursor-pointer">
               <p>Chat with Sales</p>
          </div>
          </Link>

          <Link to="/blogs">
          <div className="option max-w-md w-max break-all border border-primary rounded p-2 hover:bg-primary hover:text-white hover:cursor-pointer">
               <p>Educational Content</p>
          </div>
          </Link>

      
        </div>
        </div>

       <Brand />
        </div>)
        :
        (
          <div>
            {
              showdialogue ? (
                <div className="bot_first_effect w-sm h-sm p-4 rounded-lg relative bg-grey border border-primary">
          <p>Welcome to Invzone!<br/>
            How may I help You today?
            </p>
          </div>
              ) : ('')
            }
            </div>
          
        )  
        }

          <img onClick={changeStates} src={logo} alt="" />
      </div>
    )
}

export default mainScreen

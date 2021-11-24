import React from 'react'
import {useNavigate} from 'react-router-dom'

import back from '../../assets/icons/back.png';
import cross from '../../assets/icons/cross.png';
import avatar from '../../assets/icons/avatar.png';
import '../../assets/styles/global.scss';
const Header = () => {
    let navigate = useNavigate();

    return (
        <div>
                 <div className="header w-lg bg-primary text-white p-4 pt-8">
          <div className="header_top flex justify-between items-center">
              
                  <div className="left_top_header flex items-center">
                  <img src={back} onClick={() => navigate(-1)} alt=""/>

                  <div className="middle_top_header flex items-center ml-8">
                      <img src={avatar} alt=""/>
                      <p>Invocom</p>
                  </div>    
                  </div>
              <img src={cross} alt=""/>
              
          </div>
          <div className="header_bottom mt-3">
              <p><span>Hi</span>,<br/>
              I can help you learn more about our software solutions
              </p>
          </div>

        </div>
        </div>
    )
}

export default Header

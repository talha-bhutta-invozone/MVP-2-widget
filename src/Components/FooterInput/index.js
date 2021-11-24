import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';
import send from '../../assets/icons/send.png';
import link from '../../assets/icons/link.png';
import emoji from '../../assets/icons/emoji.png';
const Footer = () => {
    return (
        <div className="footer w-lg h-inputfoot border border-primary border-t-0 flex items-center">
            <div className="input_container w-full bg-lightGrey flex justify-between items-center px-3 relative">
                <input type="text" placeholder="Type your message here" />
                <div className="button_container flex justify-evenly items-center">
                    <img src={emoji} alt="" />
                    <img src={link} alt="" />
                    <Link to="/blogs">
                        <button>
                            <img src={send} alt="" />
                        </button>
                    </Link>
                </div>
                <div className="branding absolute ml-0 mb-0">
                    <p>Powered by <span>InvoZone</span></p>
                </div>
            </div>

        </div>
    )
}

export default Footer
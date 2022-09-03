import React from 'react'
import './ShareOn.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ShareOn = () => {
    const url = "https://www.facebook.com/sin.meng.3720"
    return (
        <div className='shareOn'>
            <div>
                <h6>Share on: </h6>
            </div>
            <div className='social__medial'>
                <div className='facebook'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                </div>
                <div className='facebook'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                    </a>
                </div>
                <div className='facebook'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <LocalParkingIcon />
                    </a>
                </div>
                <div className='facebook'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <MailIcon />
                    </a>
                </div>
                <div className='facebook'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ShareOn

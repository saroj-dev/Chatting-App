import React from 'react';
import '../css/ChattingBox.css'; 
 
function Header() {
    const LogoIcon = 'https://images.pexels.com/photos/4350664/pexels-photo-4350664.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

    return (
      <>
      <div className="header">
          <div className="logo">
              <div className="img_container">
                  <img src={LogoIcon} alt="Not Found"/> 
              </div>
              <div className="logo_name">
                  SR Boyz <small>Connecting together</small>
              </div>
          </div>
          <div className="active_status">
              Active People
              <span>2</span>
          </div>
      </div>
      </>  
    );
}

export default Header

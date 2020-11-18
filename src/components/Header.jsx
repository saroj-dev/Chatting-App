import React from 'react';
import '../css/ChattingBox.css'; 
 
function Header() {
    const LogoIcon = "https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    return (
      <>
      <div className="header">
          <div className="logo">
              <div className="img_container">
                  <img src={LogoIcon} alt="Not Found"/> 
              </div>
              <div className="logo_name">
                  SR Boyz <small>Connects You</small>
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

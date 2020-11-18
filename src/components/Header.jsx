import React from 'react';
import '../css/ChattingBox.css'; 
 
function Header() {
    const LogoIcon = "https://lh3.googleusercontent.com/a-/AOh14GgaHkjEtrDf3CA1PNbWs4R8bywZ3Z271o4jJ14d=s600-k-no-rp-mo"
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

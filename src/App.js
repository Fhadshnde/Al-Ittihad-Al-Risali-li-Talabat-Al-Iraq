import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
        <img src={require('./images/logo-atthad.jpg')} className="logo" />
        </div>
        <h1 className="main-text">الاتحاد الرسالي لطلبة العراق</h1>
      </header>
      <main className="content">
        <p className="description">
        حركة طلابية غير حكومية تستلهم القيم الاسلامية لتنمية السلوك العلمي والعملي والاخلاقي والمعرفي في المجتمع الطلابي والشبابي        </p>
        <div className="links">
          <a href="https://www.instagram.com/lthdlrslyltlb?igsh=YTBnZnUwNnh6MzFk" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61568618780204&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          
          <a href="https://t.me/+H8Q8tUMwXkxlNDYy" className="telegram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram telegram" ></i>   
            Telegram قناة
          </a>
          <a href="https://t.me/+F3allXZ5Bg1lNzhi" className="telegram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram telegram" ></i>   
            Telegram كروب
          </a>
        </div>
      </main>
      <div className="image-footer">
        {/* <img src={require('./images/left.jpg')} className="footer-image left" />
        <img src={require('./images/ri.jpg')} className="footer-image right" /> */}

      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";

import './css/Cover.css'
import './css/Invitation.css'
import './css/Calendar.css'
import './css/Account.css'
import './css/Gallery.css'
import './css/Location.css'
import './css/Footer.css'
import './css/SurveyModal.css'
import './css/Submit.css'
import './css/Comment.css'
import './css/Quiz.css'

import Cover from './pages/V2/Cover.js'
import Invitation from './pages/V2/Invitation.js';
import Calendar from './pages/V2/Calendar.js';
import Contact from './pages/V2/Account.js';
import Location from './pages/V2/Location.js';
import ImgGallery from './pages/V2/ImgGallery.js';
import Footer from './components/Footer2.js';
//import SurveyModal from './components/SurveyModal.js';
// import Submit from './pages/Submit.js';
//import Comment from './pages/Comment.js';
import Quiz from './pages/V2/Quiz.js';


function Version2() {
    const [isModalOpen, setIsModalOpen] = useState(false); // 우선 모달창 닫아놓음
  
    // 모달을 닫기 위한 함수
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div className="Tap2">
          {isModalOpen}
          <Cover/>
          <Invitation />
          <Calendar />
          <ImgGallery />
          <Location />
          <Quiz/>
          <Contact />
          <Footer />
        </div>
      );
}

export default Version2;
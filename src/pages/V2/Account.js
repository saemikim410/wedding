import React, {useState} from 'react'
import flower from '../../images/flower.png'
// import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa6";
import Modal from '../../components/Modal';
import '../../css/Modal.css'

function ContactButton({ person, account, kakaopay }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <div className="contact__box">
          <span>{person}</span>
          <div className="contact__icons">
            <button onClick={openModal} className="contact__btn"><FaMoneyCheck size="1.5em"/></button>
          </div>
        </div>
        {isModalOpen && (
          <Modal closeModal={closeModal} who={person} account={account} kakaopay={kakaopay}/>
        )}
      </>
    );
  }


  function Account() {
    const groom_contact = [
      { person: "신랑 " + process.env.REACT_APP_GROOM_NAME, account: process.env.REACT_APP_GROOM_ACCOUT, kakaopay: ""  },
      { person: "아버지 " + process.env.REACT_APP_GROOM_DAD, account: process.env.REACT_APP_GROOM_DAD_ACCOUT, kakaopay: ""  },
      { person: "어머니 " + process.env.REACT_APP_GROOM_MOM, account: process.env.REACT_APP_GROOM_MOM_ACCOUT, kakaopay: ""  },
    ];

    const bride_contact = [
      { person: "신부 " + process.env.REACT_APP_BRIDE_NAME, account: process.env.REACT_APP_BRIDE_ACCOUT, kakaopay: "" },
      { person: "아버지 " + process.env.REACT_APP_BRIDE_DAD, account: process.env.REACT_APP_BRIDE_DAD_ACCOUT, kakaopay: "" },
      { person: "어머니 " + process.env.REACT_APP_BRIDE_MOM, account: process.env.REACT_APP_BRIDE_MOM_ACCOUT, kakaopay: "" },
      ];
  
    return (
      <div className="container">
        <img src={flower} className="flower" alt="flower"/>
        <div className='contact__title'>마음 전하는 곳</div>
        <div className="contact__boxes">
          {groom_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account} kakaopay={contact.kakaopay}/>
          ))}
        </div>
        <div className="contact__boxes">
          {bride_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account} kakaopay={contact.kakaopay}/>
          ))}
        </div>
        <div className="contact__guide-text">아이콘을 클릭하시면 계좌번호를 확인할 수 있습니다.</div>
      </div>
    );
  }

 

export default Account

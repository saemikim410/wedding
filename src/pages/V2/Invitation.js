import React, {useState} from 'react'
import butterfly from '../../images/butterfly.png'
import ContactModal from '../../components/ContactModal2';

function Invitation() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function FamilyInfo({dad, mom, child, relation}) {
    return (
      <div className='invitation__family'>
          <div className='invitaion__parent'>
              <div>{dad}·{mom}</div>
          </div>
          <div>{relation}</div>
          <div className='invitation__child'>{child}</div>
      </div>
    )
  }
  return (
    <div className='bc-blue container'>
        <img src={butterfly} className='butterfly' alt='butterfly'/>
        <div className='invitation__title'>초대합니다</div>
        <div className='invitation__content'>
          <div>서로의 계절을 두 해 합께 걸어왔습니다.</div>
          <div>웃음도, 눈물도 나누며 조금씩 닮아진 우리, </div>
          <div>이제 하나의 이름으로</div>
          <div>새로운 계절을 시작하려 합니다.</div>
          <div>&nbsp;&nbsp;</div>
          <div>제주의 바람처럼 따뜻한 마음으로</div>
          <div>저희의 시작을 축복해 주세요. </div>
          <div>&nbsp;&nbsp;</div>
        </div>
        <FamilyInfo dad={process.env.REACT_APP_GROOM_DAD} mom={process.env.REACT_APP_GROOM_MOM} child={process.env.REACT_APP_GROOM_NAME} relation="의 장남" />
        <FamilyInfo dad={process.env.REACT_APP_BRIDE_DAD} mom={process.env.REACT_APP_BRIDE_MOM} child={process.env.REACT_APP_BRIDE_NAME} relation="의 장녀" />
        <button className='invitation__btn-contact2' onClick={openModal}>연락하기</button>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation

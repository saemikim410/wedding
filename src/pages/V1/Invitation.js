import React, {useState} from 'react'
import flower from '../../images/flower.png'
import ContactModal from '../../components/ContactModal';

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
    <div className='bc-pink container'>
        <img src={flower} className='flower' alt='flower'/>
        <div className='invitation__title'>초대합니다</div>
        <div className='invitation__content'>
          <div>매년 1월 18일이 되면,</div>
          <div>저희는 이 날의 사진첩을 꺼내어보며 </div>
          <div>인생에서 가장 행복했던</div>
          <div>기억을 떠올릴 것입니다.</div>
          <div>&nbsp;&nbsp;</div>
          <div>그 때, 그 사진 속에,</div>
          <div>저희와 함께 웃고 있는 </div>
          <div>여러분이 있었으면 좋겠습니다. </div>
          <div>&nbsp;&nbsp;</div>
        </div>
        <FamilyInfo dad={process.env.REACT_APP_GROOM_DAD} mom={process.env.REACT_APP_GROOM_MOM} child={process.env.REACT_APP_GROOM_NAME} relation="의 장남" />
        <FamilyInfo dad={process.env.REACT_APP_BRIDE_DAD} mom={process.env.REACT_APP_BRIDE_MOM} child={process.env.REACT_APP_BRIDE_NAME} relation="의 장녀" />
        <button className='invitation__btn-contact' onClick={openModal}>연락하기</button>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Invitation

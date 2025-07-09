import React, {useRef, useEffect} from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';

function Location() {
  const mapRef = useRef(null);
  const lat = 37.3595704; // 위도
  const lng = 127.105399; // 경도

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      var mapOptions = {
        center: new naver.maps.LatLng(lat, lng),
        zoom: 10
      };
    
      var map = new naver.maps.Map('map', mapOptions);
    }
  }, []);

  const gotoNavermap = () => {
    window.location.href = ''
  }

  const gotoKakaomap = () => {
    window.location.href = ''
  }
  

  return (
    <div className='container'>
    <div className='title'>오시는 길</div>
    <div className='location__details'>
      <div>더베뉴지 아트홀</div>
      <div>서울 강서구 강서로 388 1층</div>
    </div>
    <div id="map" ref={mapRef} className='location__map'></div>
    <div className='location__map-icon-box'>
        <div className='location__map-item' onClick={gotoNavermap}>
          <img src={naverMapIcon} className='location__map-icon' alt="naverMap"/>
          <span>네이버지도</span>
        </div>
        <div className='location__map-item' onClick={gotoKakaomap}>
          <img src={kakaoMapIcon} className='location__map-icon' alt='kakaoMap'/>
          <span>카카오지도</span>
        </div>
    </div>
   <div className='location__info'>
    <div>5호선 발산역 3번출구 도보 4분</div>
   </div>
</div>
  )
}


export default Location

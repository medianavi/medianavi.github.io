import { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Modal from '../Modal';

export default function Members() {
  const [isModalCalled, setIsModalCalled] = useState(false);
  const splideOptions = {
    type: 'loop',
    width: '100%',
    gap: 0,
    focus: 'center',
    fixedWidth: '256px',
    fixedHeight: '256px',
    arrows: false,
    pagination: false,
    drag: 'free',
    cloneStatus: false,
    updateOnMove: false,
    autoScroll: {
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
    mediaQuery: 'min',
    breakpoints: {
      1336: {
        fixedWidth: '384px',
        fixedHeight: '384px',
      },
    },
  };
  function callModal(splide, slide) {
    if (slide.slide.className.includes("keaton")) {
      setIsModalCalled(true);
    };
  }
  return (
    <>
      <Modal callModal={isModalCalled} setIsModalCalled={setIsModalCalled} />
      <section className="sections members" id="members">
        <div className="container">
          <h1 className="section-title no-sticky">Members</h1>
        </div>
        <Splide className="container-fluid" extensions={{AutoScroll}} options={splideOptions} onClick={callModal}>
          <SplideSlide className="member-item keaton">
            <div className="member-item-inner">
              <div className="member-item-front">
                <h2>Keaton<br />키튼</h2>
                <p>CEO</p>
              </div>
              <div className="member-item-back">
                <p>새로운 기술에 대한 호기심을 잃지 않는 개발자.</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className="member-item justa">
            <a className="member-item-inner" href="https://youtu.be/Pj6563CAnKs" target="_blank" rel="noreferrer">
              <div className="member-item-front">
                <h2>Justa<br />저스타</h2>
                <p>CTO</p>
              </div>
              <div className="member-item-back">
                <p>인공지능으로 인간 지능이 확장되고 인간 생활이 윤택해지도록 고민합니다.</p>
              </div>
            </a>
          </SplideSlide>
          <SplideSlide className="member-item elly">
            <span className="member-item-inner">
              <div className="member-item-front">
                <h2>Elly<br />엘리</h2>
                <p>데이터 분석</p>
              </div>
              <div className="member-item-back">
                <p>빅데이터 분석을 통한 새로운 가치 창조.</p>
              </div>
            </span>
          </SplideSlide>
          <SplideSlide className="member-item rio">
            <span className="member-item-inner">
              <div className="member-item-front">
                <h2>Rio<br />리오</h2>
                <p>UI/UX 개발</p>
              </div>
              <div className="member-item-back">
                <p>가장 효율적이고 인간 친화적인 사용자 경험을 추구합니다.</p>
              </div>
            </span>
          </SplideSlide>
          <SplideSlide className="member-item funny">
            <span className="member-item-inner">
              <div className="member-item-front">
                <h2>Funny<br />퍼니</h2>
                <p>엔지니어링</p>
              </div>
              <div className="member-item-back">
                <p>도자기를 빚는 정성으로 고객의 니즈를 안정적이며 올바른 방향으로 이끕니다.</p>
              </div>
            </span>
          </SplideSlide>
          <SplideSlide className="member-item anna">
            <span className="member-item-inner">
              <div className="member-item-front">
                <h2>Anna<br />안나</h2>
                <p>기획</p>
              </div>
              <div className="member-item-back">
                <p>대화가 잘 통하는 커뮤니케이터.</p>
              </div>
            </span>
          </SplideSlide>
        </Splide>
      </section>
    </>
  )
}

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
  const dataMembers = {
    keaton: {
      nickname: "Keaton",
      koreanname: "키튼",
      position: "CEO",
      history: [
        {
          date: "2011 ~ 현재",
          content: "㈜미디어나비 대표"
        },
        {
          date: "2015 ~ 2020",
          content: "유에프오팩토리, ㈜슬로워크 디지털 사업부 대표 역임"
        },
        {
          date: "2011 ~ 2012",
          content: "오케이트리 대표이사 역임"
        },
        {
          date: "2008 ~ 2010",
          content: "㈜세가지소원 개발이사 역임"
        },
        {
          date: "2005 ~ 2007",
          content: "㈜인프라웨어 상품기획팀"
        },
        {
          date: "2000 ~ 2004",
          content: "㈜소만사 개발팀장"
        },
        {
          date: "1999 ~ 2000",
          content: "㈜DIG 커뮤니케이션, 웹 개발"
        },
      ],
      project: [
        {
          date: "2022.09 ~ 2022.11",
          content: "한국언론진흥재단, 디지털 뉴스 유통 구조 개선 포럼 논의용 임시 사이트 백엔드 개발"
        },
        {
          date: "2022.02 ~ 현재",
          content: "한국언론진흥재단, 2022년 뉴스알고 유지보수 PM"
        },
        {
          date: "2021.02 ~ 현재",
          content: "토이스미스, 백엔드 서버 개발 및 운영 컨설팅"
        },
        {
          date: "2021.07 ~ 2021.12",
          content: "한국언론진흥재단, 언론사를 위한 언어정보자원 개발 총괄 PM"
        },
        {
          date: "2020.09 ~ 2020.12",
          content: "폰노이만, 올실버 프로토타입 앱 개발"
        },
        {
          date: "2020.06 ~ 2020.08",
          content: "서울마리나, 웹페이지 리뉴얼 및 유지 보수"
        },
        {
          date: "2019.07 ~ 2019.10",
          content: "임팩트 스테이션, 페이버릿미 - 취미 여가 큐레이션 플랫폼 개발"
        },
        {
          date: "2019.01 ~ 2019.12",
          content: "서울시, 서울시 민주주의 서울 유지 보수 PM"
        },
        {
          date: "2018.10 ~ 2019.09",
          content: "SK행복나눔재단, SK 프로보노 개편 및 유지 보수 개발 PL"
        },
        {
          date: "2018.12 ~ 2019.06",
          content: "조선일보 미디어연구소, 형태소 분석기 개선 연구용역 PM"
        },
        {
          date: "2018.08 ~ 2019.04",
          content: "한국언론진흥재단, 뉴스트러스트 알고리즘 고도화 개발 PM"
        },
        {
          date: "2018.06 ~ 2018.12",
          content: "삼성전자, 삼성닷컴 안전보건 페이지 콘텐츠 개발 PM"
        },
        {
          date: "2017.07 ~ 2018.03",
          content: "한국언론진흥재단, 뉴스트러스트 알고리즘 고도화 및 API 개발 PM"
        },
        {
          date: "2016.07 ~ 2017.03",
          content: "한국언론진흥재단, 뉴스트러스트 계량요인 알고리즘 개발 PL"
        },
        {
          date: "2016.06 ~ 2017.01",
          content: "블록체인오에스, 스타닥 앱 서비스 서버 개발"
        },
        {
          date: "2016.06 ~ 2016.08",
          content: "인체조직기증지원본부, 세일즈포스 서약자 관리 시스템 개발 PM"
        },
        {
          date: "2016.07 ~ 2016.08",
          content: "서울시, playseoulbrand 사이트 개발 PM"
        },
        {
          date: "2016.02 ~ 2016.04",
          content: "빠띠, 카누 앱 개발 (리액트 네이티브 하이브리드 앱)"
        },
        {
          date: "2015.05 ~ 2015.08",
          content: "나인후르츠, LG생활건강, 누벨다이어트 앱 서비스 개발 PM"
        },
        {
          date: "2015.02 ~ 2017.05",
          content: "미즈메디, 난임클리닉 앱 서비스 개발 PM"
        },
        {
          date: "2015.03 ~ 2015.09",
          content: "펀디안, 펀디안 서비스 개발"
        },
        {
          date: "2014.04 ~ 2017.03",
          content: "한국콘텐츠진흥원, 스케치기반 웹툰 저작도구 개발 R&D 지원사업 PM"
        },
        {
          date: "2013.06 ~ 2014.03",
          content: "노코드, 모바일 웹툰 서비스 카툰컵 서비스 서버 개발/PM"
        },
        {
          date: "2012.08 ~ 2012.11",
          content: "CCR, 포트리스 2 레드 모바일 안드로이드 버전 서버 개발"
        },
        {
          date: "2012.06 ~ 2013.06",
          content: "CH 게임즈, CCR, RF Online Mobile 서버 개발 및 운영 지원/PM"
        },
        {
          date: "2011.01 ~ 2011.03",
          content: "MOIBA, 공공정보 DB 활용 어플리케이션 개발/PM"
        },
        {
          date: "2010.11 ~ 2011.01",
          content: "인프라웨어, SKT, 청소년 Care 솔루션 관리서버 개발 PM"
        },
        {
          date: "2010.04 ~ 2010.11",
          content: "NIPA, HTML5 웹 에디터 개발 PM"
        },
        {
          date: "2010.05 ~ 2010.08",
          content: "인프라웨어, 북큐브, 이북 아이폰 어플 UI 개발 PM"
        },
        {
          date: "2009.07 ~ 2010.06",
          content: "인프라웨어, SKT, AirDisk 서비스 개발 PM"
        },
        {
          date: "2009.01 ~ 2009.06",
          content: "인프라웨어, SKT, PMD 브라우저 UI 개발 PM"
        },
        {
          date: "2008.11 ~ 2009.06",
          content: "퍼니게임즈, 삼성, 파브 탑재 게임 포팅 개발"
        },
        {
          date: "2005.04 ~ 2007.11",
          content: "인프라웨어, SKT, MMS/Email/CMF 솔루션 제안"
        },
        {
          date: "2004.03 ~ 2004.11",
          content: "다이퀘스트, 대용량 통합검색솔루션 마리너2 개발"
        },
        {
          date: "2003.04 ~ 2004.03",
          content: "소만사, 통합 인증 및 관리(EAM) 솔루션 개발"
        },
        {
          date: "2000.03 ~ 2003.03",
          content: "소만사, 비업무사이트 차단 솔루션 웹키퍼 개발 팀장"
        },
        {
          date: "1999.11 ~ 1999.12",
          content: "DIG 커뮤니케이션, 한국 IBM, 신입사원 공채 시스템 개발"
        },
        {
          date: "1999.09 ~ 2000.03",
          content: "DIG 커뮤니케이션, AdTyping, Coolla.com 광고 웹게임 서비스 개발"
        },
      ],
    },
  };
  function callModal(splide, slide) {
    if (slide.slide.className.includes("keaton")) {
      setIsModalCalled(true);
    };
  }
  return (
    <>
      <Modal callModal={isModalCalled} setIsModalCalled={setIsModalCalled} modalData={dataMembers}/>
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
            <div className="member-item-inner">
              <div className="member-item-front">
                <h2>Justa<br />저스타</h2>
                <p>CTO</p>
              </div>
              <div className="member-item-back">
                <p>인공지능으로 인간 지능이 확장되고 인간 생활이 윤택해지도록 고민합니다.</p>
              </div>
            </div>
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

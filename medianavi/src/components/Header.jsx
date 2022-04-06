import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerEl = useRef();
  const [moToggleBtn, setMoToggleBtn] = useState(false);
  const [headerBgIsIntro, setHeaderBgIsIntro] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  /* 스크롤 위치를 확인하고 header의 svg, border 색상을 변경 */

  const changeHeaderBg = () => {
    setLastScrollPos(window.scrollY + headerEl.current.offsetHeight); // header 높이를 더해서 섹션 겹침 부분부터 색상 변경이 발생하도록 처리
    if (window.innerHeight <= lastScrollPos) {
      // headerEl.current.classList.remove('scroll_intro');
      setHeaderBgIsIntro(false);
    } else {
      // headerEl.current.classList.add('scroll_intro');
      setHeaderBgIsIntro(true);
    }
  }
  // 페이지 로드시 최초 1회 색상 변경
  useEffect(() => {
    if (window.scrollY < window.innerHeight) {
      // headerEl.current.classList.add('scroll_intro');
      setHeaderBgIsIntro(true);
    }
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', changeHeaderBg);
    // cleanup
    return () => {
      window.removeEventListener('scroll', changeHeaderBg);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollPos]);
  /* end of 스크롤 위치를 확인하고 header의 svg, border 색상을 변경 */

  /* mobile 환경에서 메뉴 토글 */
  const gnbToggle = () => {
    setMoToggleBtn(!moToggleBtn);
  }
  /* end of mobile 환경에서 메뉴 토글 */
  const scrollSmooth = (event) => {
    const targetSection = event.target.hash;
    console.log(targetSection);
  }

  // useEffect(() => {
  //   setHeaderClass(
  //     Object.entries({
  //       'scroll_intro': headerBgIsIntro,
  //       'gnb_show': moToggleBtn,
  //     })
  //     .filter(([key, value]) => value)
  //     .map(([key, value]) => key)
  //     .join(' ')
  //   )
  // }, [moToggleBtn, lastScrollPos])

  return (
    <>
      <header ref={headerEl} className={
        (headerBgIsIntro ? "scroll_intro" : "")
        + (moToggleBtn ? "gnb_show" : "")
      }>
        <div className="container">
          <Link to="#" className="logo" aria-label="미디어나비">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" className="svg_logo" preserveAspectRatio="none" viewBox="0 0 205.71 90">
              <title>미디어나비 로고</title>
              <path className="svg_logo_path" d="M202.22,0H176.37a9,9,0,0,0-7.52,5.12l-19,43.4-19-43.4A9,9,0,0,0,123.35,0H97.4a9,9,0,0,0-7.52,5.12L79.15,29.64,75.29,5.12A6.32,6.32,0,0,0,69.2,0H42.88a9,9,0,0,0-7.52,5.12L.46,84.88C-.78,87.71.58,90,3.5,90H29.34a9,9,0,0,0,7.52-5.12L47.59,60.36l3.86,24.52A6.33,6.33,0,0,0,57.54,90H83.86a9,9,0,0,0,7.53-5.12l19-43.4,19,43.4A9,9,0,0,0,136.89,90h25.94a9,9,0,0,0,7.52-5.12L205.26,5.12C206.49,2.29,205.13,0,202.22,0ZM51.51,51.4,70.44,8.16,75.23,38.6,56.31,81.84Zm61.73-16.46L125.66,6.56a2.8,2.8,0,0,1,.36.56l21,47.94L134.58,83.44a2.42,2.42,0,0,1-.36-.56Z" />
            </svg>
          </Link>
          <button type="button" className="menu-toggle" aria-haspopup="true" aria-label="메뉴 펼치기" onClick={gnbToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" className="svg_menu" preserveAspectRatio="none" viewBox="0 0 123 90">
              <rect className="svg_menu_stroke" x="35.75" y="15.78" width="75" height="9" />
              <rect className="svg_menu_stroke" x="11.75" y="66.78" width="75" height="9" />
              <rect className="svg_menu_stroke" x="23.75" y="41.28" width="75" height="9" />
              <rect className="svg_menu_frame" width="123" height="90" />
            </svg>
          </button>
          <nav className={"gnb" + (moToggleBtn ? "show" : "") }>
            <ul>
              <li><a className="gnb-a active" href="#intro" onClick={scrollSmooth}>Intro</a></li>
              <li><a className="gnb-a" href="#about">About</a></li>
              <li><a className="gnb-a" href="#members">Members</a></li>
              <li><a className="gnb-a" href="#contactus">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
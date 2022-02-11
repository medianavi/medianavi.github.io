(function() {
  /* 
    << 스크롤 위치를 확인하고 header의 svg, border 색상을 변경 >>
  */
  const svgLogo = document.querySelector('.svg_logo_path');
  const svgMenu = document.querySelectorAll('.svg_menu_stroke');
  const header = document.querySelector('header');
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const gnb = document.querySelector('.gnb');

  let last_known_scroll_position = 0;

  // 페이지 로드시 최초 1회 색상 변경
  if (window.scrollY < window.innerHeight) {
    header.classList.add('scroll_intro');
  }  
  window.addEventListener('scroll', function () {
    last_known_scroll_position = window.scrollY + header.offsetHeight; // header 높이를 더해서 섹션 겹침 부분부터 색상 변경이 발생하도록 처리
    if (window.innerHeight <= last_known_scroll_position) {
      header.classList.remove('scroll_intro');
    } else {
      header.classList.add('scroll_intro');
    }
  });
  /*
    << end of 스크롤 위치를 확인하고 header의 svg, border 색상을 변경 >>
  */

  /* mobile 환경에서 메뉴 토글 */
  menuToggleBtn.addEventListener('click', e => {
    gnb.classList.toggle('show');
    header.classList.toggle('gnb_show');
  })
  /* end of mobile 환경에서 메뉴 토글 */

  /* form label의 숨김 처리 */
  const formField = document.querySelectorAll('.form-field');
  formField.forEach(i => {
    i.addEventListener('change', e => {
      if (i.value != '') {
        i.nextElementSibling.classList.add('float-label');
      } else {
        i.nextElementSibling.classList.remove('float-label');
      }
    })
  })
  /* end of form label의 숨김 처리 */
})()
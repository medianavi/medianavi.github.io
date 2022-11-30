import React from "react";

function Works() {
  const worksReps = [
    {
      name: '한국언론진흥재단',
      content: ['언론사를 위한 언어정보자원 개발',
                '뉴스알고 개발 및 유지보수',
                '디지털 뉴스 유통 구조 개선 포럼 논의용 임시 사이트 개발'],
      thumbnail: './img/works/works-rep1.png',
      detail: 'https://blog.medianavi.kr/kpf',
    },
    {
      name: '토이스미스',
      content: ['백엔드 서버 개발',
                '운영 컨설팅'],
      thumbnail: './img/works/works-rep2.png',
      detail: 'https://blog.medianavi.kr/toysmyth',
    },
    {
      name: '서울마리나',
      content: ['웹사이트 리뉴얼 및 유지보수'],
      thumbnail: './img/works/works-rep3.png',
      detail: 'https://blog.medianavi.kr/seoulmarina',
    },
    {
      name: '한국데이터산업진흥원',
      content: ['2023년도 데이터바우처 지원사업 - AI 데이터가공부문 공급기업 선정'],
      thumbnail: './img/works/works-rep4.png',
      detail: 'https://blog.medianavi.kr/kdata',
    },
  ];
  const worksHistory = [
    {
      date: "2022.11 ~ 2023.11",
      content: "한국데이터산업진흥원, 2023년도 데이터바우처 지원사업 AI 가공데이터 부문 공급기업 선정",
    },
    {
      date: "2022.09 ~ 2022.11",
      content: "한국언론진흥재단, 디지털 뉴스 유통 구조 개선 포럼 논의용 임시 사이트 개발",
    }, 
    {
      date: "2022.02 ~ 현재", 
      content: "한국언론진흥재단, 2022년 뉴스알고 유지보수 개발"
    },
    {
      date: "2021.02 ~ 현재",
      content: "토이스미스, 백엔드 서버 개발 및 운영 컨설팅"
    },
    {
      date: "2021.07 ~ 2021.12",
      content: "한국언론진흥재단, 언론사를 위한 언어정보자원 개발"
    },
    {
      date: "2020.09 ~ 2020.12",
      content: "폰노이만, 올실버 프로토타입 앱 개발"
    },
    {
      date: "2020.06 ~ 2022.08",
      content: "서울마리나, 웹페이지 리뉴얼 및 유지 보수"
    },
  ];
  return (
    <>
    <section className="sections works" id="works">
      <div className="container">
        <h1 className="section-title no-sticky">Works</h1>
      </div>
      <div className="container">
        <ul className="row works-rep">
          {worksReps.map((item, index) => {
            return (
              <li key={index} className="col works-rep--item">
                <a href={item.detail} rel="noreferrer" target="_blank">
                  <div className="works-rep--thumbnail" style={{backgroundImage: `url(${item.thumbnail})`}}></div>
                  <h5>{item.name}</h5>
                  {/* <ul className="works-rep-item--content">
                  {item.content.map((content) => {
                    return <li key={content}>{content}</li>
                  })}
                  </ul> */}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="container">
        <table className="works-history">
          <thead>
            <tr>
              <th>Date</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody>
            {worksHistory.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.content}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* <div className="works-footer">
          <button className="btn-more centering">더 보기</button>
        </div> */}
      </div>
    </section>
    </>
  )
}

export default Works
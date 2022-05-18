import React from 'react'

function Works() {
  const worksReps = [
    {
      name: '한국언론진흥재단',
      content: ['언론사를 위한 언어정보자원 개발',
                '뉴스알고 개발 및 유지보수'],
      thumbnail: './img/works/works-rep1.png',
    },
    {
      name: '토이스미스',
      content: ['백엔드 서버 개발',
                '운영 컨설팅'],
      thumbnail: './img/works/works-rep2.png',
    },
    {
      name: '서울마리나',
      content: ['웹사이트 리뉴얼 및 유지보수'],
      thumbnail: './img/works/works-rep3.png',
    },
  ];
  const worksHistory = [
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
      date: "2020.06 ~ 2020.08",
      content: "서울마리나, 웹페이지 리뉴얼 및 유지 보수"
    },
    {
      date: "2019.07 ~ 2019.10",
      content: "임팩트 스테이션, 페이버릿미 - 취미 여가 큐레이션 플랫폼 개발"
    },
  ]
  return (
    <section className="sections works" id="works">
      <div className="container">
        <h1 className="section-title no-sticky">Works</h1>
      </div>
      <div className="container">
        <ul className="row works-rep">
          {worksReps.map((item) => {
            return (
              <li className="col works-rep--item">
                <div className="works-rep--thumbnail" style={{backgroundImage: `url(${item.thumbnail})`}}></div>
                <h5>{item.name}</h5>
                <ul className="works-rep-item--content">
                {item.content.map((content) => {
                  return <li>{content}</li>
                })}
                </ul>
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
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {worksHistory.map((item, index) => {
              return (
                <tr>
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
  )
}

export default Works
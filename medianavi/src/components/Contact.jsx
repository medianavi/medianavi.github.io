import React from 'react'

export default function Contact() {
  return (
    <section className="sections contactus" id="contactus">
      <div className="container">
        <h1 className="section-title">Contact</h1>
        <div className="row">
          <p className="lead">함께 해결하고 싶은 문제를 "문제해결 조력자" 미디어나비에게 알려주세요. 변화를 위해 함께 고민하고 해결방안을 제시합니다.</p>
          <form action="https://script.google.com/macros/s/AKfycbwnSD7BqTBiuLaPemV19hg8phzP2amvTHnQpJ6hE-GTGdnlTWkqfoQaU11YlJRYYdPl/exec" method="post" className="gform contact-form">
            <div className="form-group">
              <input type="text" className="form-field" name="formTitle" id="formTitle" required />
              <label className="form-label" htmlFor="formTitle">제목</label>
            </div>
            <div className="form-group">
              <input type="text" className="form-field" name="formName" id="formName" required />
                <label className="form-label" htmlFor="formName">이름</label>
            </div>
            <div className="form-group">
              <input type="email" className="form-field" name="formEmail" id="formEmail" required />
                <label className="form-label" htmlFor="formEmail">회신받을 이메일</label>
            </div>
            <div className="form-group">
              <input type="phone" className="form-field" name="formPhone" id="formPhone" />
                <label className="form-label" htmlFor="formPhone">전화번호(선택사항)</label>
            </div>
            <div className="form-group">
              <textarea name="formContent" id="formContent" className="form-field" rows="6" required></textarea>
              <label className="form-label" htmlFor="formContent">문의 내용</label>
            </div>
            <button className="btn">보내기</button>
            <div className="thankyou_message" style={{'display':'none'}}>
              <p className="lead">연락주셔서 감사합니다! 확인 후 회신 드리겠습니다.</p>
            </div>
          </form>
          <dl className="contact-info">
            <dt className="contact-icon__address">주소</dt>
            <dd>경기 용인시 수지구 현암로 135 503호</dd>
            <dt className="contact-icon__email">이메일</dt>
            <dd>keaton@medianavi.kr</dd>
            <dt className="contact-icon__github">GitHub</dt>
            <dd><a href="https://github.com/medianavi" target="_blank" rel="noreferrer">https://github.com/medianavi</a></dd>
          </dl>
        </div>
      </div>
    </section>
  )
}

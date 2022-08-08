export default function Modal(props) {
  function closeModal(event) {
    props.setIsModalCalled(false);
  }
  console.log(props);  
  return (
    <>
    { 
      props.callModal
      ? <div className="modal" id="modal">
          <div className="modal__content">
            <div className="modal__header">
              <h3>{props.modalData.keaton.nickname} <span aria-label="한글 닉네임">{props.modalData.keaton.koreanname}</span> / {props.modalData.keaton.position}</h3>
              <button className="modal__btn-close" onClick={closeModal}>닫기</button>
            </div>
            <div className="modal__body">
              <h4>약력</h4>
              <ul className="list-style-none">
                {props.modalData.keaton.history.map((item, index) => {
                  return <li key={index}><span className="history-date">{item.date}</span> {item.content}</li>;
                })}
              </ul>
              <h4>참여 프로젝트</h4>
              <ul className="list-style-none">
                {props.modalData.keaton.project.map((item, index) => {
                  return <li key={index}><span className="history-date">{item.date}</span> {item.content}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      : null
    }
    </>
  )
}

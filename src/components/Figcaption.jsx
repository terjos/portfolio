import useToggle from '../hooks/useToggle'
import './Figcaption.css'

function Figcaption({ txt, techno }) {
  const [readMore, toggleReadMore] = useToggle()
  const technoList = <>{techno.map((e, key) => <div className="techno" key={key}>{e}</div>)} </>

  let a = null
  let content = ''
  if (Array.isArray(txt)){
    a = txt[0]
    content = txt[1]
  }else {
    content = txt
  }

  if (content.length < 45) {
    return <figcaption>{a}{content}
      <div className="figcaption-techno">
        {technoList}
      </div>
    </figcaption>
  }

  const figcaptionExpended = <>
    <div className="figcaption-expended" >
      {a}{content}<br /><span className="read-less" onClick={toggleReadMore}></span>
      <div className="figcaption-techno">
        {technoList}
      </div>
    </div>
  </>

  return (
    <>
      <figcaption className="figcaption">
        {a}{content.replace(/^(.{45}[^\s]*).*/, "$1")}... <span className="read-more" onClick={toggleReadMore}>voir +</span>
        <div className="figcaption-techno">
          {technoList}
        </div>
        {readMore && figcaptionExpended}
      </figcaption>
    </>
  );
}

export default Figcaption

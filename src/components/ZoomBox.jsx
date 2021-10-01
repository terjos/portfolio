import './ZoomBox.css'

function ZoomBox({ children, handleClose }) {
  return (
    <div className="zoom-box" onClick={handleClose}>
      <span className="close">✖</span>
      <div>{children}</div>
    </div>
  );
}

export default ZoomBox

import useToggle from '../hooks/useToggle'
import Figcaption from './Figcaption'
import Img from './Img'
import ZoomBox from './ZoomBox'
import './Realisation.css'

function Realisation({ children, techno, img, ext, w, h }) {
  const [zoom, toggleZoom] = useToggle()

  let imgZoomed = null
  if (ext === '.gif') {
    const gifSmall = require(`../images/tmp/${img}_400.gif`).default
    const gifLarge = require(`../images/tmp/${img}_800.gif`).default
    imgZoomed = <img src={`${img}`} alt={img} srcSet={`${gifSmall} 400w, ${gifLarge} 800w`} w={w} h={h} />
  } else {
    imgZoomed = <Img name={img} alt={img} w={w} h={h}></Img>
  }

  return (
    <div className="realisation">
      {zoom &&
        <ZoomBox handleClose={toggleZoom}>
          {imgZoomed}
        </ZoomBox>
      }
      <figure>
        <div onClick={toggleZoom}>
          <Img name={img} alt={img} w={w} h={h}></Img>
        </div>
        <Figcaption techno={techno} txt={children} />
      </figure>
    </div >
  );
}

export default Realisation;

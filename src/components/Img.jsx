
function Img({ name, alt, w = 400, h = 400 }) {

  const small = 400
  const large = 800

  const imgSmall = require(`../images/tmp/${name}_${small}.jpg`).default
  const imgLarge = require(`../images/tmp/${name}_${large}.jpg`).default

  const webpSmall = require(`../images/tmp/${name}_${small}.webp`).default
  const webpLarge = require(`../images/tmp/${name}_${large}.webp`).default


  return (
    <picture>
      <source type="image/jpg" srcSet={`${webpSmall} 600w, ${webpLarge}`} />
      <source type="image/webp" srcSet={`${imgSmall} 600w, ${imgLarge}`} />

      <img src={imgLarge} alt={alt} loading="lazy" width={w} height={h} />
    </picture>
  );
}

export default Img

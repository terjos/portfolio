import pkg from 'gulp';
import through2 from 'through2'
import Jimp from 'jimp'
import imageminWebp from 'imagemin-webp'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'
const { src, dest, parallel, series } = pkg;

const ASSETS_DIR = 'src';
const EXCLUDE_SRC_GLOB = `!(favicon*|*-256)`;

function resize(from, width) {
  const SRC = `../${ASSETS_DIR}/${from}/**/${EXCLUDE_SRC_GLOB}*.{jpg,png}`;
  const DEST = `../${ASSETS_DIR}/images/tmp`;

  return function resizeImage() {
    const quality = 80;
    return src(SRC)
      .pipe(
        through2.obj(async function (file, _, cb) {
          if (file.isBuffer()) {
            const img = await Jimp.read(file.contents);

            const smallImg = img
              .resize(width, Jimp.AUTO).quality(quality);

            const content = await smallImg
              .getBufferAsync(Jimp.AUTO);

            file.contents = Buffer.from(content);
          }
          cb(null, file);
        })
      )
      .pipe(rename(function (path) {
        path.basename += `_${width}`;
      }))
      .pipe(dest(DEST));
  };
}

function convert(from, to, extension = 'webp') {
  const SRC = `../${ASSETS_DIR}/${from}/**/${EXCLUDE_SRC_GLOB}*.{jpg,png}`;
  const DEST = `../${ASSETS_DIR}/${to}`;

  return function convertWebp() {
    return src(SRC)
      .pipe(imagemin([imageminWebp({ quality: 80 })]))
      .pipe(
        rename({
          extname: `.${extension}`,
        })
      )
      .pipe(dest(DEST));
  };
}

function copyGif(from) {
  const SRC = `../${ASSETS_DIR}/${from}/**/${EXCLUDE_SRC_GLOB}*.gif`;
  const DEST = `../${ASSETS_DIR}/images/tmp/`;
  return function copy() {
    return src(SRC)
      .pipe(dest(DEST));
  };
}

// export the task, pass in parameters
export default series(
  resize('images/images_source', 400),
  resize('images/images_source', 800),
  copyGif('images/images_source'),
  parallel(
    convert('images/tmp', 'images/tmp'),
  )
);
export function backgroundImgUrl(path, fileName) {
  return `url(${require(`${path}/${fileName}`)})`;
}
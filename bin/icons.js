const fs = require('fs');
const path = require('path');
const { parse, stringify } = require('svgson');

const iconsDirectory = '../icons';

function removeProps(el) {
  const attributes = el.attributes;
  delete attributes['fill-rule'];
  delete attributes['clip-rule'];
  delete attributes['fill'];

  if (el.children.length) {
    return removeProps(el.children[0]);
  }
}

async function getIcons() {
  try {
    const files = await fs.promises.readdir(
      path.resolve(__dirname, iconsDirectory)
    );

    const arr = {};
    for (const file of files) {
      const t = fs.readFileSync(path.resolve(__dirname, iconsDirectory, file));
      const l = await parse(t);
      removeProps(l);
      arr[path.parse(file).name] = stringify(l.children);
    }

    return arr;
  } catch (e) {
    console.error('Error: ', e);
  }
  return null;
}

getIcons();

module.exports = getIcons;

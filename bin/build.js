const path = require('path');
const fs = require('fs');
const format = require('prettier-eslint');
const upperCamelCase = require('uppercamelcase');
const getIcons = require('./icons');

async function build() {
  const rootDir = path.join(__dirname, '..');

  const avatars = await getIcons();

  const icons = Object.keys(avatars);

  const dir = path.join(rootDir, 'src/icons');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), '', 'utf-8');

  const attrsToString = attrs => {
    return Object.keys(attrs)
      .map(key => {
        if (key === 'width' || key === 'height' || key === 'stroke') {
          return key + '={' + attrs[key] + '}';
        }
        if (key === 'rest') {
          return '{...rest}';
        }
        return key + '="' + attrs[key] + '"';
      })
      .join(' ');
  };

  for (let i of icons) {
    const location = path.join(rootDir, 'src/icons', `${i}.tsx`);
    const ComponentName = i === 'github' ? 'GitHub' : upperCamelCase(i);
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 'size',
      height: 'size',
      viewBox: '0 0 100 100',
      rest: '...rest',
    };

    const element = `
    import React, { forwardRef, LegacyRef } from 'react';

    type Props = {
      color?: string;
      size?: string | number;
    };
    type Ref = LegacyRef<SVGSVGElement> | undefined;
    
    const ${ComponentName} = forwardRef(({ color = 'currentColor', size = 24, ...rest }: Props, ref: Ref) => {
      return (
        <svg ref={ref} fill={color} ${attrsToString(defaultAttrs)}>
        ${avatars[i]}
        </svg>
      )
    });
    
    ${ComponentName}.displayName = '${ComponentName}'
    
    export default ${ComponentName}
    `;

    const component = await format({
      text: element,
      prettierOptions: {
        parser: 'flow',
      },
    });

    fs.writeFileSync(location, component, 'utf-8');

    console.log('Successfully built', ComponentName);

    const exportString = `export { default as ${ComponentName} } from './icons/${i}';\r\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.ts'),
      exportString,
      'utf-8'
    );
  }
}

build();

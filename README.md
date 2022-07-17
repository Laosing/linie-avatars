## React Linie Avatars

#### What is linie-avatars?

linie-avatars is a collection of simple line avatars for React.js. Each avatar is designed with an emphasis on simplicity, consistency and readability.

Linie means line in German

<p align="middle">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-01.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-02.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-03.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-04.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-05.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-06.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-07.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-08.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-09.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-10.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-11.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-12.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-13.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-14.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-15.svg">
<img src="https://raw.githubusercontent.com/Laosing/linie-avatars/90516a09893fb0a6df2c06246f198783128dac14/icons/avatar-16.svg">
</p>

### Installation

    yarn add @laosing/linie-avatars

or

    npm i @laosing/linie-avatars

### Usage

```javascript
import React from "react"
import { Avatar01 } from "@laosing/linie-avatars"

const App = () => {
  return <Avatar01 />
}

export default App
```

Icons can be configured with inline props:

```javascript
<Avatar01 color="red" size={48} />
```

You can also include the whole icon pack:

```javascript
import React from "react"
import * as Icon from "@laosing/linie-avatars"

const App = () => {
  return <Icon.Avatar01 />
}

export default App
```

### Development

```bash
yarn compile
```

```bash
yarn build
```

## React Linie Avatars

#### What is linie-avatars?

linie-avatars is a collection of simple line avatars for React.js. Each avatar is designed with an emphasis on simplicity, consistency and readability.

Linie means line in German

<p align="middle">
<img src="./icons/avatar-01.svg">
<img src="./icons/avatar-02.svg">
<img src="./icons/avatar-03.svg">
<img src="./icons/avatar-04.svg">
<img src="./icons/avatar-05.svg">
<img src="./icons/avatar-06.svg">
</p>

### Installation

    yarn add linie-avatars

or

    npm i linie-avatars

### Usage

```javascript
import React from "react"
import { Avatar01 } from "linie-avatars"

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
import * as Icon from "linie-avatars"

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

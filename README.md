# r-modal-sf

[npm](https://www.npmjs.com/package/r-modal-sf)
[github](https://github.com/FlorysiakSimon/r-modal-sf)

## Installation

```sh
npm i r-modal-sf;

import { Modal } from 'r-modal-sf';
```

## Example

Here is a simple example of r-modal-sf being used in an app

```jsx
import React, { useState } from "react";

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        content="test content"
        modalOpen={modalOpen}
        modalClose={toggleModal}
      />
    </>
  );
};
```

You can also use custom style

```jsx
const customStyle = {
  overlay: {
    backgroundColor: "green",
  },
  content: {
    backgroundColor: "white",
    borderRadius: "10px",
  },
  close: {
    padding: "5px 17px",
    size: "14px",
    border: "none",
  },
};

<Modal
  content="test content"
  modalOpen={modalOpen}
  style={customStyle}
  modalClose={toggleModal}
/>;
```

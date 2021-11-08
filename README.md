# r-modal-sf

[npm link](https://www.npmjs.com/package/r-modal-sf)

## Installation

```sh
npm i r-modal-sf
```

```sh
import { Modal } from 'r-modal-sf';
```

## Examples

Here is a simple example of react-modal-sf being used in an app with some custom styles

```jsx
import React, { useState } from "react";

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <div>
        <button onClick={toggleModal}>Open modal</button>
      </div>

      <Modal
        content="test content"
        modalOpen={modalOpen}
        modalClose={toggleModal}
      />
    </>
  );
};
```

import Header from './Header';
import { useState, Fragment } from 'react';

const HeaderWithButton = () => {
  const [title, setTitle] = useState('My name is Shubham');
  function changeTitle() {
    setTitle('My name is ' + Math.random());
  }
  return (
    <Fragment>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={title} />
    </Fragment>
  );
};

export default HeaderWithButton;

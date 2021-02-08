import { useState } from 'react';
import PropTypes from 'prop-types';
import Lifecycle from '../Lifecycle/Lifecycle';

const LifecycleParent = ({ greetings, error }) => {
  const [isShowChildren, setIsShowChildren] = useState(false);

  const onShowLifecycle = () => {
    setIsShowChildren(prevState => !prevState);
  };

  const text = 'some text';

  return (
    <>
      {greetings && <p>{greetings}</p>}
      <button onClick={onShowLifecycle}>show/hide "Lifecycle"</button>
      {isShowChildren && <Lifecycle text={text} />}
      {error && new Error('ERROR from "LifecycleParent". Only for test!!!!!')}
    </>
  );
};

LifecycleParent.propTypes = {
  greetings: PropTypes.string,
  error: PropTypes.bool,
};

export default LifecycleParent;

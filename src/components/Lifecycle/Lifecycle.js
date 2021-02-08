import { useEffect, useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from './LifecycleStyled';

const initCountClick = () => {
  console.log('"constructor" - one times, before render');
  return 0;
};

const Lifecycle = ({ text }) => {
  const [countClick, setCountClick] = useState(() => initCountClick());

  console.log('"render" - every times');

  const mounted = useRef(null);

  useEffect(() => {
    if (!mounted.current) {
      console.log('"componentDidMount" one times, after first render');
      mounted.current = true;
    } else {
      console.log(
        '"componentDidUpdate" - every times, when change stats or props',
      );
    }
  });

  // other variant componentDidMount
  // useEffect(() => {
  //   console.log(
  //     '"componentDidMount" one times, after first render',
  //   );
  // }, []);

  useEffect(() => {
    return function willUnmount() {
      console.log('"componentWillUnmount" - every unmount before new render');
    };
  }, []);

  const onCounterClick = () => {
    setCountClick(prevState => (prevState += 1));
  };

  return (
    <Box>
      <h2> Component for mount/unmount</h2>
      <p>{text}</p>
      <p>You Click {countClick} times</p>
      <p>Button click does not start "shouldComponentUpdate"</p>
      <button onClick={onCounterClick}> Counter increase</button>
    </Box>
  );
};

Lifecycle.propTypes = {
  text: PropTypes.string,
};

export default memo(Lifecycle, () => {
  console.log('"shouldComponentUpdate" - when props change');
  return false;
});

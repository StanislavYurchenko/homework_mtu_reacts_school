import PropTypes from 'prop-types';

const Can = ({ permissions, component, ...args }) => {
  const Component = component;
  return permissions.includes(Component.name) && <Component {...args} />;
};

Can.propTypes = {
  permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.elementType,
};

export default Can;

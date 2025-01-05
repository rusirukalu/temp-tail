import Navbar from './Navbar';
import PropTypes from 'prop-types';

const MainLDash = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
MainLDash.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLDash;

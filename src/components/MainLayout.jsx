import Navbar from './Navbar';
import Footer from './Footer';
import GoToTop from './GoToTop';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <GoToTop />
      <Footer />
    </>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;

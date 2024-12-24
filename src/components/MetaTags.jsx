import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaTags = ({ title, description, keywords, author, ogImage, ogUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    {/* Open Graph tags for better social media sharing */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);
MetaTags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  author: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
};

export default MetaTags;
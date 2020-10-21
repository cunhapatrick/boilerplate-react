import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

// import * as Style from './LayoutWrapper.style';

/* NOTE
	This Component mount the general page layout like Header, Footer and wraps the content of the body
	Deals with the general loading, modals and some general navigation functions
*/

const LayoutWrapper = ({ children }) => {
	// Some logic

	// High Order Component that wraps the page layout
	return <>{cloneElement(children)}</>;
};

LayoutWrapper.propTypes = {
	children: PropTypes.any.isRequired,
};

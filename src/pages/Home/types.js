import PropTypes from 'prop-types';

export const HomeContainerPropTypes = {
	storeExample: PropTypes.shape({
		loaded: PropTypes.bool.isRequired,
		currentExample: PropTypes.string.isRequired,
		currentExamples: PropTypes.arrayOf(PropTypes.string),
		total: PropTypes.number.isRequired,
		pages: PropTypes.number.isRequired,
		currentPage: PropTypes.number.isRequired,
		error: PropTypes.shape({
			statusCode: PropTypes.number,
			message: PropTypes.string,
		}).isRequired,
		success: '',
	}).isRequired,
	exampleRequest: PropTypes.func.isRequired,
};

export const HomePropTypes = {
	currentExample: PropTypes.string.isRequired,
};

import React, { useEffect } from 'react';

/* NOTE
	This component is responsable for the logic on the component
*/

// Redux store connection
import withConnect from 'stores/withConnect';

// Page jsx component
import Home from './Home';

// PropTypes
import { HomeContainerPropTypes } from './types';

const HomeContainer = ({ storeExample, exampleRequest }) => {
	// ComponentDidMount alike
	useEffect(() => {
		exampleRequest({});
	}, []);
	const { currentExample } = storeExample;

	return <Home currentExample={currentExample} />;
};

HomeContainer.propTypes = HomeContainerPropTypes;

// com seleção de store
// export default withConnect(HomeContainer, ['storeExample']);
// com todos os stores
export default withConnect(HomeContainer);

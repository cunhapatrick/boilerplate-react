import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Global Style
import GlobalStyle from 'styles/global.style';

import Routes from './routes';
import stores from './stores';

const App = () => (
	<Provider store={stores}>
		<Router>
			<Routes />
			<GlobalStyle />
		</Router>
	</Provider>
);

export default App;

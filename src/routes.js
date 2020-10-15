import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Home from 'pages/Home/';

// Functions
import { isLogged } from 'services/auth';

// Enhanced Routes
const AuthRoute = ({ children, ...rest }) => (
	<Route {...rest} render={() => (isLogged() ? children : <Redirect />)} />
);

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
	</Switch>
);

AuthRoute.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Routes;

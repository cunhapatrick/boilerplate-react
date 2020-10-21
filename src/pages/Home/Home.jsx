import React from 'react';
// import Style from './Home.style';

// NOTE this component make the html structure of the component with the styles

// PropTypes
import { HomePropTypes } from './types';

const Home = ({ currentExample }) => <div>{currentExample}</div>;

Home.propTypes = HomePropTypes;

export default Home;

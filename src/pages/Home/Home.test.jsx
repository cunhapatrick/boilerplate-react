import React from 'react';
import { shallow } from 'enzyme';

// component
import Home from './Home';

describe('Component test', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Home />);
	});

	it('should render without crashing', () => {
		expect(wrapper.find('div')).toBeDefined();
	});
});

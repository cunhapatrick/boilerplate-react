import React from 'react';
import { shallow } from 'enzyme';

// component
import HomeContainer from './HomeContainer';

describe('Component test', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<HomeContainer />);
	});

	it('should render without crashing', () => {
		expect(wrapper.find('div')).toBeDefined();
	});
});

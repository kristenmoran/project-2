import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './Homepage';

describe('Homepage', () => {
	it('should render as expected', () => {
		const component = shallow(<Homepage />);
		expect(component.contains('critical acclaim')).toBe(true);
	});
});

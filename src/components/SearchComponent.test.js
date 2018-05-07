import React from 'react';

import { configure }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlagComponent from './SearchComponent';

configure({adapter: new Adapter()})

describe('<FlagComponent />', () => {
    it('should render <FlagComponent /> more than 0 countries are selected');
    const wrapper = shallow(<FlagComponent/>);
    expect(wrapper.find(FlagComponent)).toBeCalled();
})
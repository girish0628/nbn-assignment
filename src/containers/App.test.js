import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../Utils';
import App from './App';

const setUp = (props={}) => {
    const component = shallow(<App {...props} />);
    return component;
};

describe('App Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const app = findByTestAtrr(component, 'app');
        expect(app.length).toBe(1);
    }); 
});
import React from 'react';
import { SubmissionError } from 'redux-form';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import Form from '../index';

const companies = [{
  id: 1,
  name: 'Apple',
  number: 11111,
  type: 1,
  date: '15.04.2018',
  active: true,
}];
const types = [{
  id: 1,
  values: 'type1',
}];
Enzyme.configure({ adapter: new Adapter() });

describe("Form works", () => {
	let submitting, touched, error, reset, onSave, onSaveResponse, handleSubmit;
	beforeEach(() => {
		submitting = false;
		touched = false;
		error = null;
		onSaveResponse = Promise.resolve();
		handleSubmit = fn => fn;
	})
	const buildSubject = () => {
		onSave = sinon.stub().returns(onSaveResponse);
		const props = {
			onSave,
			submitting,
			fields: {
				name: { value: 'name', touched, error },
        number: { value: 'number', touched, error },
        type: { value: 'type', touched, error },
        date: { value: '01.01.2018', touched, error },
        active: { value: true, touched, error },
			},
			handleSubmit,
			reset,
    };
    const initialStore = {
      company: {
        list: companies,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialStore);
		return shallow(<Form {...props} store={store} match={{ params: { id: 1 } }} types={types} />);
	};

	it("calls reset after onSave", () => {
    const subject = buildSubject();
    const fields = subject.find('ReduxForm').find('Field');
	});
})
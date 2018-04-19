import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateCompany } from '../../../actions/company';
import Item from '../item';
import RenderDatePicker from './date';


export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    };
  }
  submit(val, dispatch) {
      this.setState({
          submit: true,
      });
      this.props.handleSubmit(val, dispatch);
  }
  render() {
    return (
      <div>
        <Link to={`/company/${this.props.match.params.id}`}>To company</Link>
        <form onSubmit={(v, d) => this.submit(v, d)}>
          <Field name="id" component="input" type="hidden" />
          <div>
            <label htmlFor="name">Имя</label>
            <Field name="name" id="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="number">ОГРН</label>
            <Field name="number" id="number" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="type">Тип компании</label>
            <Field name="type" id="type" component="select">
              {
                this.props.types.map(type => <option value={type.id} key={type.id}>{type.value}</option>)
              }
            </Field>
          </div>
          <div>
            <label htmlFor="date">Дата регистрации</label>
            <Field
              name="date"
              id="date"
              inputValueFormat="DD.MM.YYYY"
              dateFormat="L"
              dateFormatCalendar="dddd"
              fixedHeight
              showMonthDropdown
              showYearDropdown
              component={RenderDatePicker}
            />
          </div>
          <div>
            <label htmlFor="active">Активен</label>
            <Field name="active" id="active" component="input" type="checkbox" />
          </div>
          <button type="submit" disabled={this.props.submitting}>Update</button>
        </form>
        {
          this.state.submit && <Item id={this.props.match.params.id} types={this.props.types} />
        }
      </div>
    );
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(updateCompany(values.id, values));
};

const mapStateToProps = (store, ownProps) => {
  let data = {};
  const companies = store.company.list.filter(company => company.id === parseInt(ownProps.match.params.id));
  if (companies.length) {
    data = {...companies[0]};
  }
  return {
    types: store.company.types,
    initialValues: data,
  };
};

Form = reduxForm({
  form: 'edit',
  onSubmit,
  enableReinitialize: true
}, mapStateToProps)(Form);

export default connect(mapStateToProps)(Form);

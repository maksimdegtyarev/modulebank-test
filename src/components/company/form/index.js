import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Item from '../item';
import RenderDatePicker from './date';


export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    };
  }
  submit(data) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <Link to={`/company/${this.props.match.params.id}`}>To company</Link>
        <form onSubmit={this.submit}>
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
                this.props.types.map(type => <option key={type.id}>{type.value}</option>)
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
          <button type="submit">Update</button>
        </form>
        {
          this.state.submit && <Item id={this.props.match.params.id} />
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    types: store.company.types,
  };
};

Edit = connect(mapStateToProps)(Edit);

export default reduxForm({ form: 'edit' })(Edit);

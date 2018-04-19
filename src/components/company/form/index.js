import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateCompany } from '../../../actions/company';
import Item from '../item';
import RenderDatePicker from './date';
import Link from '../link';


const Container = styled.div`
  width: 500px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Span = styled.div`
  width: 50%;
`;

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
        <Link to={`/company/${this.props.match.params.id}`}>На страницу компании</Link>
        <form onSubmit={(v, d) => this.submit(v, d)}>
          <Field name="id" component="input" type="hidden" />
          <Container>
            <Row>
              <Span>
                <label htmlFor="name">Имя</label>
              </Span>
              <Span>
                <Field name="name" id="name" component="input" type="text" />
              </Span>
            </Row>
            <Row>
              <Span>
                <label htmlFor="number">ОГРН</label>
              </Span>
              <Span>
                <Field name="number" id="number" component="input" type="text" />
              </Span>
            </Row>
            <Row>
              <Span>
                <label htmlFor="type">Тип компании</label>
              </Span>
              <Span>
                <Field name="type" id="type" component="select">
                  {
                    this.props.types.map(type => <option value={type.id} key={type.id}>{type.value}</option>)
                  }
                </Field>
              </Span>
            </Row>
            <Row>
              <Span>
                <label htmlFor="date">Дата регистрации</label>
              </Span>
              <Span>
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
              </Span>
            </Row>
            <Row>
              <Span>
                <label htmlFor="active">Активен</label>
              </Span>
              <Span>
                <Field name="active" id="active" component="input" type="checkbox" />
              </Span>
            </Row>
          </Container>
          <button type="submit" disabled={this.props.submitting}>Обновить</button>
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

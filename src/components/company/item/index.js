import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

export class Item extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    let type = '';
    if (this.props.data) {
      const types = this.props.types.filter(type => type.id === this.props.data.type);
      if (types.length) {
        type = types[0].value;
      }
    }
    return (
      <div>
        {
          this.props.data && this.props.location &&
          <Link to={`/company/edit/${this.props.data.id}`}>Редактировать данные компании</Link>
        }
        {
          this.props.data &&
          <Container>
            <Row>
              <Span><strong>ID: </strong></Span>
              <Span>{this.props.data.id}</Span>
            </Row>
            <Row>
              <Span><strong>Имя:</strong></Span>
              <Span>{this.props.data.name}</Span>
            </Row>
            <Row>
              <Span><strong>ОГРН:</strong></Span>
              <Span>{this.props.data.number}</Span>
            </Row>
            <Row>
              <Span><strong>Тип компании:</strong></Span>
              <Span>{type}</Span>
            </Row>
            <Row>
              <Span><strong>Дата регистрации:</strong></Span>
              <Span>{this.props.data.date}</Span>
            </Row>
            <Row>
              <Span><strong>Активен?</strong></Span>
              <Span>{this.props.data.active ? 'Да' : 'Нет'}</Span>
            </Row>
          </Container>
        }
        <Link to="/">К списку компаний</Link>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const id = ownProps.id || ownProps.match.params.id;
  const item = store.company.list.filter(item => item.id === parseInt(id));
  return {
    data: item.length > 0 ? item[0] : null,
    types: store.company.types,
  };
};
export default connect(mapStateToProps)(Item);

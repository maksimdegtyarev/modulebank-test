import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCompanies } from '../../../sagas';
import Company from '../item';
import A from '../link';


const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
`;

export class List extends Component {
    render() {
        return (
          <div>
            <h1>Список компаний:</h1>
            <Ul>
              {
                this.props.companies.map((company) => {
                  return (
                    <Li key={company.id}>
                      <A to={`/company/${company.id}`}>{company.name}</A>
                    </Li>
                  );
                })
              }
            </Ul>
          </div>
        )
    }
}

const mapStateToProps = (store) => {
  return {
    companies: store.company.list,
  };
};
export default connect(mapStateToProps)(List);

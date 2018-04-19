import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchCompanies } from '../../../sagas';
import Company from '../item';


export class List extends Component {
    render() {
        return (
          <ul>
            {
              this.props.companies.map((company) => {
                return (
                  <li key={company.id}>
                    <Link to={`/company/${company.id}`}>{company.name}</Link>
                  </li>
                );
              })
            }
          </ul>
        )
    }
}

const mapStateToProps = (store) => {
  return {
    companies: store.company.list,
  };
};
export default connect(mapStateToProps)(List);

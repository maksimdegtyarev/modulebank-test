import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchCompanies } from '../../../sagas';
import Company from '../item';


export class List extends Component {
    constructor(props) {
        super(props);
    }
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
    types: store.company.types,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompanies: () => {
      dispatch(fetchCompanies());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import style from './style.css';


export class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              {
                this.props.data &&
                <Link to={`/company/edit/${this.props.data.id}`}>Edit company</Link>
              }
              {
                this.props.data &&
                <div>
                    <p>
                        <strong>ID: </strong>{this.props.data.id}
                    </p>
                    <p>
                        <strong>Имя: </strong>{this.props.data.name}
                    </p>
                    <p>
                        <strong>ОГРН: </strong>{this.props.data.number}
                    </p>
                    <p>
                        <strong>Тип компании: </strong>{this.props.data.type}
                    </p>
                    <p>
                        <strong>Дата регистрации: </strong>{this.props.data.date}
                    </p>
                    <p>
                        <strong>Активен?: </strong>{this.props.data.active ? 'Да' : 'Нет'}
                    </p>
                </div>
              }
              <Link to="/">Back to companies</Link>
            </div>
        );
    }
}

const mapStateToProps = (store, ownProps) => {
  const id = ownProps.id || ownProps.match.params.id;
  const item = store.company.list.filter(item => item.id === parseInt(id));
  return {
    data: item.length > 0 ? item[0] : null,
  };
};
export default connect(mapStateToProps)(Item);

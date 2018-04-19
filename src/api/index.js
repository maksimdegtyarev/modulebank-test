import axios from 'axios';


export default class Api {
  static url = 'http://localhost:8080/api/';
  static async getTypes() {
    //const response = await axios.get(Api.url.concat('types'));
    const response = [{
      id: 1,
      value: 'ИП',
    }, {
      id: 2,
      value: 'ООО',
    }];
    return response;
  }
  static async getCompanies() {
    //const response = await axios.get(Api.url.concat('companies'));
    const response = [{
      id: 1,
      name: 'Apple',
      number: 11111,
      type: 1,
      date: '15.04.2018',
      active: true,
    }, {
      id: 2,
      name: 'Amazon',
      number: 22222,
      type: 2,
      date: '16.04.2018',
      active: false,
    }, {
      id: 3,
      name: 'Ebay',
      number: 33333,
      type: 1,
      date: '18.04.2018',
      active: true,
    }];
    return response;
  }
}

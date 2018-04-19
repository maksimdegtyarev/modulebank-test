import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


export default class Api {
  static url = 'http://localhost:8080/api/';
  static async getTypes() {
    const mock = new MockAdapter(axios);
    mock.onGet(Api.url.concat('types')).reply(200, [{
      id: 1,
      value: 'ИП',
    }, {
      id: 2,
      value: 'ООО',
    }]);
    const response = await axios.get(Api.url.concat('types')).then(data => data.data);
    return response;
  }
  static async getCompanies() {
    const mock = new MockAdapter(axios);
    mock.onGet(Api.url.concat('companies')).reply(200, [{
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
    }]);
    const response = await axios.get(Api.url.concat('companies')).then(data => data.data);
    return response;
  }
  static async updateCompany(id, data) {
    const response = {
      success: true,
    };
    return response;
  }
}

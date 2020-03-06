const axios = require('axios');

class Api {
  constructor(url) {
    this.url = url
  }

  async get() {
    const response = await axios.get(this.url);
    const data = await response.data;
    return data;
  }
}

module.exports = Api;

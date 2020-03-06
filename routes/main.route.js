const config = require('config');
const {Router} = require('express');
const main = require('../middleware/main.middleware');
const Api = require('../classes/Api');

const groupBy = require('../helpers/GroupBy');
const filterOut = require('../helpers/FilterOut');
const getBreweries = require('../helpers/GetBrewereis');

const router = Router();
const BASE_URL = config.get('base_url');


router.get('*', main, async (req, res) => {
  try {
    const api = new Api(BASE_URL);
    const data = await api.get();

    const breweries = getBreweries(data);
    const breweriesGroupedByState = groupBy(breweries, 'state');
    const breweriesWithOutMicro = filterOut(breweries, 'type', 'micro');

    res.render('main', {
      list: breweriesGroupedByState,
      table: breweriesWithOutMicro
    });

  } catch (error) {
    res.status(500).json({
      message: 'GET request failed',
      error: error.message
    });
  }
});

module.exports = router;

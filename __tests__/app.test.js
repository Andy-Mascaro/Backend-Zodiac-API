const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../data/zodiac');

describe('Backend-Zodiac-API routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return a list of signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((info) => {
      return { id: info.id, name: info.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return a sign detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});

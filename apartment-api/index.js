import { getLimeQuote } from './service/limehome.js';
import { getStayeryQuote } from './service/stayery.js';

async function runner() {
  const from = new Date('2024-11-26');
  const to = new Date('2024-11-29');
  // const responses = await Promise.all([getLimeQuote(from, to), getStayeryQuote(from, to)]);
  const stayery = await getStayeryQuote(from, to);
  console.log(stayery);
}

runner();

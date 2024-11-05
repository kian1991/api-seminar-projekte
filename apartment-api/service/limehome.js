export const getLimeQuote = async (from, to) => {
  // from and to are Date objects with the desired arrival and departure dates
  from = from.toISOString().substr(0, 10);
  to = to.toISOString().substr(0, 10);
  const requestUrl = `https://api.limehome.com/properties/v1/public/properties/124/offers?arrival=${from}&departure=${to}&adults=1`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  // find the cheapest offer and calculate the price per day
  const cheapestOffer = data.payload.reduce(
    (cheapest, offer) => {
      if (offer.total_net_amount.amount < cheapest.price) {
        return {
          price: offer.total_net_amount.amount,
          cancellationPolicy: offer.cancellation_policy_code,
        };
      }
      return cheapest;
    },
    { price: Infinity }
  );

  const cheapestPrice = cheapestOffer.price;
  const days = (new Date(to) - new Date(from)) / (1000 * 60 * 60 * 24);
  const pricePerDay = cheapestPrice / days;

  return {
    days,
    cheapestPrice,
    pricePerDay,
  };
};

const response = {
  success: true,
  message: 'Property request successful',
  payload: [
    {
      unit_group_id: 53,
      rate_plan_id: 'POR102-C64_N_2_0_L0-DELUXE',
      total_gross_amount: {
        amount: 234,
        currency: 'EUR',
      },
      total_tax: {
        amount: 15.31,
        currency: 'EUR',
      },
      total_net_amount: {
        amount: 218.69,
        currency: 'EUR',
      },
      cancellation_policy_code: 'NONREF',
      city_tax: null,
    },
    {
      unit_group_id: 53,
      rate_plan_id: 'POR102-C64_F_2_0_L0-DELUXE',
      total_gross_amount: {
        amount: 267,
        currency: 'EUR',
      },
      total_tax: {
        amount: 17.47,
        currency: 'EUR',
      },
      total_net_amount: {
        amount: 249.53,
        currency: 'EUR',
      },
      cancellation_policy_code: 'FLEX',
      city_tax: null,
    },
    {
      unit_group_id: 446,
      rate_plan_id: 'POR102-C49_N_2_0_L0-C49',
      total_gross_amount: {
        amount: 186,
        currency: 'EUR',
      },
      total_tax: {
        amount: 12.17,
        currency: 'EUR',
      },
      total_net_amount: {
        amount: 173.83,
        currency: 'EUR',
      },
      cancellation_policy_code: 'NONREF',
      city_tax: null,
    },
    {
      unit_group_id: 446,
      rate_plan_id: 'POR102-C49_F_2_0_L0-C49',
      total_gross_amount: {
        amount: 213,
        currency: 'EUR',
      },
      total_tax: {
        amount: 13.93,
        currency: 'EUR',
      },
      total_net_amount: {
        amount: 199.07,
        currency: 'EUR',
      },
      cancellation_policy_code: 'FLEX',
      city_tax: null,
    },
    {
      unit_group_id: 314,
      rate_plan_id: 'POR102-C80_N_2_0_L0-C80',
      total_gross_amount: {
        amount: 233,
        currency: 'EUR',
      },
      total_tax: {
        amount: 15.24,
        currency: 'EUR',
      },
      total_net_amount: {
        amount: 217.76,
        currency: 'EUR',
      },
      cancellation_policy_code: 'NONREF',
      city_tax: null,
    },
    {
      unit_group_id: 314,
      rate_plan_id: 'POR102-C80_F_2_0_L0-C80',
      total_gross_amount: {
        amount: 266,
        currency: 'EUR',
      },
      total_tax: {
        amount: 17.4,
        currency: 'EUR',
      },
      total_net_amount: {
        amount: 248.6,
        currency: 'EUR',
      },
      cancellation_policy_code: 'FLEX',
      city_tax: null,
    },
  ],
};

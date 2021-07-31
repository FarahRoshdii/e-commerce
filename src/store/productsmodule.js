import axios from "axios";

const state = {
  tickers: [],
};

const getters = {
  tickersList: (state) => state.tickers,
};

const Token = "GickTrQadZTqfeDdQADIQsohc8mdcYdu";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Token}`,
  },
};

const actions = {
  async fetchTickers({ commit }) {
    const response = await axios.get(
      "https://api.polygon.io/v3/reference/tickers?&sort=ticker&order=asc&limit=10",
      config
    );
    console.log(response.data.results);
    commit("setTickers", response.data.results);
  },
};

const mutations = {
  setTickers: (state, tickers) => (state.tickers = tickers),
};

export default {
  state,
  getters,
  actions,
  mutations,
};

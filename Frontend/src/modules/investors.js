import db from '../firebase/init';

export default {
  state: {
    investors: {},
    isFetching: false,
  },

  // getters
  getters: {
    allInvestors: function(state) {
      return state.investors;
    },
    investorById: (state) => (investor_id) => {
      return state.investors[investor_id];
    }
  },

  // actions
  actions: {
    getAllInvestors: async function(context) {
      try {
        let investors = {};
        context.commit('REQUEST_ALL_INVESTORS');
        // .get() returns an array of QueryDocumentSnapshot
        const snapshot = await db.collection('investors').get();
        // mapping data from snapshots with .data() method
        snapshot.forEach(doc => investors[doc.id] = doc.data())
        context.commit('RECEIVE_ALL_INVESTORS', {investors});
      } catch(err) {
        context.commit('REQUEST_ALL_INVESTORS');
        throw new Error('There was an error fetching investors: ', err);
      }
    }
  },

  // mutations
  mutations: {
    REQUEST_ALL_INVESTORS: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_INVESTORS: function(state, payload) {
      state.investors = payload.investors;
      state.isFetching = false;
    },
  },
}

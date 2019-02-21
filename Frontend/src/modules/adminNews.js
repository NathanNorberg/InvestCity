import db from '../firebase/init';

export default {
  state: {
    adminNews: {},
    isFetching: false,
  },

  // getters
  getters: {
    allAdminNews: function(state) {
      return state.adminNews;
    },
    adminNewsById: (state) => (adminNews_id) => {
      return state.adminNews[adminNews_id];
    }
  },

  // actions
  actions: {
    getAllUsers: async function(context) {
      try {
        let adminNews = {};
        context.commit('REQUEST_ALL_NEW');
        // .get() returns an array of QueryDocumentSnapshot
        const snapshot = await db.collection('adminNews').get();
        // mapping data from snapshots with .data() method
        snapshot.forEach(doc => adminNews[doc.id] = doc.data())
        context.commit('RECEIVE_ALL_NEW', {adminNews});
      } catch(err) {
        context.commit('REQUEST_ALL_NEW');
        throw new Error('There was an error fetching adminNews: ', err);
      }
    }
  },

  // mutations
  mutations: {
    REQUEST_ALL_NEW: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_NEW: function(state, payload) {
      state.adminNews = payload.adminNews;
      state.isFetching = false;
    },
  },
}

import firebase from 'firebase/app';
import '../firebase/init';
import router from '../router';
import db from '../firebase/init';

export default {
  state: {
    investors: [],
    authenticated: false,
  },
  // getters
  getters: {
    auth: function(state) {
      return state.investors;
    },
    authenticated: function(state) {
      return state.authenticated;
    }
  },

  // actions
  actions: {
    // register: function(context, investors) {
    //   const { email, password, name } = investors;
    //   firebase.auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then( cred => {
    //       // insert newly created user into database by unique id
    //       db.collection('users').doc(cred.investors.uid).set({
    //         email: email,
    //         bio: '',
    //         name: name,
    //         photoURL: cred.investors.photoURL || 'https://i.imgur.com/ET0WJCb.png',
    //         location: 'Wonderland, AZ'
    //       });
    //       // update firebase.auth().currentUser displayName and photoURL
    //       firebase.auth().currentUser.updateProfile({
    //         displayName: name,
    //         photoURL: cred.investors.photoURL || 'https://i.imgur.com/ET0WJCb.png',
    //       });
    //       // create relevant databases
    //       db.collection('statuses').doc(cred.investors.uid).set({
    //         name: name,
    //         photoURL: cred.investors.photoURL,
    //       })
    //       db.collection('messages').doc(cred.investors.uid).set({
    //         name: name,
    //         photoURL: cred.investors.photoURL,
    //       })
    //     })
    //     .then( () => {
    //       router.push({path: '/login'});
    //     })
    //     .catch( err => {
    //       throw new Error(err);
    //     })
    // },
    login: function(context, investors) {
      const { emailAndLogin, password } = investors;
      firebase.auth()
        .signInWithEmailAndPassword(emailAndLogin, password)
        .then( cred => {
          const { investors } = cred;
          context.commit('LOGIN', {investors});
          router.push({path: '/investorDashboard'});
        })
        .catch( err => {
          throw new Error(err);
        })
    },
    logout: function(context) {
      firebase.auth().signOut()
        .then( () => {
          context.commit('LOGOUT');
          router.push({path: '/'})
        })
    },
    // NOTE: setUser is probably not being used anywhere, get rid of it.
    setUser: function(context, investors) {
      context.commit('LOGIN', {investors});
      router.push({path: '/investorDashboard'});
    }
  },

  // mutations
  mutations: {
    LOGIN: function(state, payload) {
      state.investors = payload.investors;
      state.authenticated = true;
    },
    LOGOUT: function(state) {
      state.investors = [];
      state.authenticated = false;
    },
  },

}

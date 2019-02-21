import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
    state: {
        admin: [],
        adminMinor: [],
        auth: {},
        adminNews: [],
        entities: [],
        investmentNotes: [],
        investmentInvestors: [],
        investors: [],
        investments: [],
        filteredSearch: "",
        isLoggedIn: false
    },
    getters: {
        getAdminByAdminId: (state) => (admin_id) => {
            return state.admin.filter(admin => admin.id == admin_id)[0];
        },
        getAdminMinorByAdminMinorId: (state) => (adminMinor_id) => {
            return state.adminMinor.filter(adminMinor => adminMinor.id == adminMinor_id)[0];
        },
        getInvestorsByInvestorId: (state) => (investor_id) => {
            return state.investors.filter(investor => investor.id == investor_id)[0];
        },
        // getInvestmentInvestorsByInvestmentInvestorId: (state) => (invesmentInvestor_id) => {
        //     return state.investmentInvestors.filter(investmentInvestors => investmentInvestors.id == investmentInvestors_id)[0];
        // },
        getInvestmentByInvestmentId: (state) => (investment_id) => {
            return state.investments.filter(investment => investment.id == investment_id)[0];
        },
        getAdminNewsByAdminNewsId: (state) => (adminNews_id) => {
            return state.adminNews.filter(adminNews => adminNews.id == adminNews_id);
        },
        // getInvestorInvestmentsByInvestmentInvestorsId: (state) => (investmentInvestors_id) => {
        //     return state.investors.filter(investors => investors.id == investmentInvestors_id).map(investors => { return {...investors,
                // name: state.investors.find(u => u.id == investmentInvestors.investor_id).name} })
            //   }
            // }
          // }
    },

        // getUserCommentsBySituationId: (state) => (situation_id) => {
        //     return state.comments.filter(comment => comment.id == situation_id).map(comment => { return {...comment,
        //         username: state.users.find(u => u.id == comment.user_id).username} })
        // },
        // getLoggedIn: state => state.isLoggedIn
    actions: {
        getAllInvestors(context) {
            console.log('asdfasdfasdf')
            return axios.get('http:getAllInvestorEntities//localhost:8000/investors').then((results) => {
                context.commit('getAllInvestors', results.data)
            })
          },
        getAllAdminSuper(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/adminSuper').then((results) => {
                context.commit('getAllAdminSuper', results.data)
            })
        },
        getAllAdminMinors(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/adminMinor').then((results) => {
                context.commit('getAllAdminMinors', results.data)
            })
        },
        getAllInvestments(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/investments').then((results) => {
                context.commit('getAllInvestments', results.data)
            })
        },
        getAdminNews(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/adminNews').then((results) => {
                context.commit('getAllAdminNews', results.data)
            })
        },
        getAllinvestmentInvestors(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/investmentInvestors').then((results) => {
                context.commit('getAllinvestmentInvestors', results.data)
            })
        },
        getAllInvestorInvestmentNotes(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/investorInvestmentNotes').then((results) => {
                context.commit('getAllInvestorInvestmentNotes', results.data)
            })
        },
        getAllInvestorEntities(context) {
            console.log('Investor Entities')
            return axios.get('http://localhost:8000/investorEntities').then((results) => {
                context.commit('getAllInvestorEntities', results.data)
            })
        },

        addAdminNews(context, payload){
          return axios.post('http://localhost:8000/adminNews/addAdminNews').then((results) => {
            context.commit('addAdminNews', results.data)
          })
        }
    },
    mutations: {
        getAllInvestors(state, investors){
            state.investors = investors;
        },
        getAllAdminSuper(state, admin){
            state.admin = admin;
        },
        getAllAdminMinors(state, adminMinor){
            state.adminMinor = adminMinor;
        },
        getAllInvestments(state, investments){
            state.investments = investments;
        },
        getAllAdminNews(state, adminNews){
            state.adminNews = adminNews;
        },
        getAllinvestmentInvestors(state, investmentInvestors){
            state.investmentInvestors = investmentInvestors;
        },
        getAllInvestorInvestmentNotes(state, investmentNotes){
            state.investmentNotes = investmentNotes;
        },
        getAllInvestorEntities(state, entities){
            state.entities = entities;
        },
    }
})

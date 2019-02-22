import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
    state: {
        admin: [],
        adminSuper: [],
        adminMinor: [],
        auth: {},
        adminNews: [],
        entities: [],
        investmentNotes: [],
        investmentInvestors: [],
        investors: [],
        investments: [],
        filteredSearch: "",
        isLoggedIn: localStorage.getItem('token') || false
    },
    getters: {
      getLoggedIn: state => state.isLoggedIn,

        getAdminByAdminId: (state) => (admin_id) => {
            return state.admin.filter(admin => admin.id == admin_id)[0];
        },
        getAdminMinorByAdminMinorId: (state) => (adminMinor_id) => {
            return state.adminMinor.filter(adminMinor => adminMinor.id == adminMinor_id)[0];
        },

        getInvestorsByInvestorId: (state) => (investor_id) => {
            return state.investors.filter(investor => investor.id == investor_id)[0];
        },
        addInvestors: (state) => (investor_id) => {
          return state.investors.filter(investor => investor.id == investor_id)
        },

        getInvestmentByInvestmentId: (state) => (investments_id) => {
            return state.investments.filter(investments => investments.id == investments_id)[0];
        },
        addInvestment: (state) => (investment_id) => {
          return state.investments.filter(investment => investment.id == investment_id)
        },

        getAdminNewsByAdminNewsId: (state) => (adminNews_id) => {
          return state.adminNews.filter(adminNews => adminNews.id == adminNews_id);
        },
        addAdminNews: (state) => (adminNew_id) => {
          return state.adminNews.filter(adminNew => adminNew.id == adminNew_id)
        }

    },

    actions: {
        getInvestors(context) {
            console.log('Getting Investors')
            return axios.get('http://localhost:8000/investors').then((results) => {
                context.commit('getInvestors', results.data)
            })
          },
        getAdminSuper(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/adminSuper').then((results) => {
                context.commit('getAdminSuper', results.data)
            })
        },
        getAdminMinors(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/adminMinor').then((results) => {
                context.commit('getAdminMinors', results.data)
            })
        },
        getInvestments(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/investments').then((results) => {
                context.commit('getInvestments', results.data)
            })
        },
        getAdminNews(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/adminNews').then((results) => {
                context.commit('getAdminNews', results.data)
            })
        },
        getinvestmentInvestors(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/investmentInvestors').then((results) => {
                context.commit('getinvestmentInvestors', results.data)
            })
        },
        getInvestorInvestmentNotes(context) {
            console.log('asdfasdfasdf')
            return axios.get('http://localhost:8000/investorInvestmentNotes').then((results) => {
                context.commit('getInvestorInvestmentNotes', results.data)
            })
        },
        getInvestorEntities(context) {
            console.log('Investor Entities')
            return axios.get('http://localhost:8000/investorEntities').then((results) => {
                context.commit('getInvestorEntities', results.data)
            })
        },

        addAdminNews(context, payload){
          return axios.post('http://localhost:8000/adminNews/addAdminNews', payload).then((results) => {
            context.commit('addAdminNews', results.data)
          })
        },

        addInvestors(context, payload){
          return axios.post('http://localhost:8000/investors/addInvestors', payload).then((results) => {
            context.commit('addInvestors', results.data)
          })
        },
        addInvestment(context, payload){
          return axios.post('http://localhost:8000/investments/addInvestment', payload).then((results) => {
            context.commit('addInvestment', results.data)
          })
        },
    },
    mutations: {

        getAllAdminSuper(state, adminSuper){
            state.adminSuper = adminSuper;
        },
        getAllAdminMinors(state, adminMinor){
            state.adminMinor = adminMinor;
        },
        getInvestments(state, investments){
            state.investments = investments;
        },
        getInvestors(state, investors){
            state.investors = investors;
        },
        addInvestment(state, investment){
            state.investments = [...state.investments, investment];
        },
        addAdminNews(state, adminNew){
            state.adminNews = [...state.adminNews, adminNew];
        },
        addInvestors(state, investor){
            state.investors = [...state.investors, investor];
        },
        getAllInvestmentInvestors(state, investmentInvestors){
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

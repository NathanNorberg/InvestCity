import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export const store = new Vuex.Store({
    state: {
        admin: [],
        adminSupers: [],
        adminMinors: [],
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

        getAdminSupersByAdminSuperId: (state) => (adminSuper_id) => {
            return state.adminSupers.filter(adminSuper => adminSuper.id == adminSuper_id)[0];
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

        getEntitiesByEntityId: (state) => (entity_id) => {
            return state.entities.filter(entity => entity.id == entity_id)[0];
        },

        getEntitiesByInvestorId: (state) => (investor_id) => {
            return state.entities.filter(entity => entity.investor_id == investor_id).map(entity => {
              return {...entity, investor: state.investors.filter(investor => investor.id == entity.investor_id[0])};
            });
        },
        getInvestmentInvestorsByInvestmentId: (state) => (investment_id) => {
            return state.investmentInvestors.filter(investmentInvestor => investmentInvestor.investment_id == investment_id).map(investmentInvestor => {
              return {...investmentInvestor, investment: state.investments.filter(investment => investment.id == investmentInvestor.investment_id[0])};
            });
        },


        addInvestorEntity: (state) => (entity_id) => {
          return state.entities.filter(entity => entity.id == entity_id)
        },

        addInvestmentInvestor: (state) => (investmentInvestor_id) => {
          return state.investmentInvestors.filter(investmentInvestor => investmentInvestor.id == investmentInvestor_id)
        },

        getInvestmentByInvestmentId: (state) => (investment_id) => {
            return state.investments.filter(investment => investment.id == investment_id)[0];
        },
        addInvestment: (state) => (investment_id) => {
          return state.investments.filter(investment => investment.id == investment_id)
        },

        getAdminNewsByAdminNewsId: (state) => (adminNew_id) => {
          return state.adminNews.filter(adminNew => adminNew.id == adminNew_id);
        },
        addAdminNews: (state) => (adminNew_id) => {
          return state.adminNews.filter(adminNew => adminNew.id == adminNew_id)
        }

    },

    actions: {

        getInvestorEntities(context) {
          console.log('Getting Investor Entities')
          return axios.get('http://localhost:8000/investorEntities').then((results) => {
              context.commit('getInvestorEntities', results.data)
          })
        },
        getAdminSupers(context) {
            console.log('Getting Super Admin')
            return axios.get('http://localhost:8000/adminSuper').then((results) => {
                context.commit('getAdminSupers', results.data)
            })
        },
        editAdminSuper(context, payload){
          console.log(payload)
          return axios.patch('http://localhost:8000/adminSuper/editAdminSuper/'+payload.id, payload).then((results) => {
            context.commit('editAdminSuper', results.data)
          })
        },


        getAdminMinors(context) {
            console.log('Getting Admin Minor')
            return axios.get('http://localhost:8000/adminMinor').then((results) => {
                context.commit('getAdminMinors', results.data)
            })
        },


        getInvestmentInvestors(context) {
            console.log('Getting Investment Investors')
            return axios.get('http://localhost:8000/investmentInvestors').then((results) => {
                context.commit('getInvestmentInvestors', results.data)
            })
        },
        getInvestorInvestmentNotes(context) {
            console.log('Getting Investor Investment Notes')
            return axios.get('http://localhost:8000/investorInvestmentNotes').then((results) => {
                context.commit('getInvestorInvestmentNotes', results.data)
            })
        },

        //Admin News Actions
        getAdminNews(context) {
          console.log('Getting Admin News')
          return axios.get('http://localhost:8000/adminNews').then((results) => {
            context.commit('getAdminNews', results.data)
          })
        },

        addAdminNews(context, payload){
          return axios.post('http://localhost:8000/adminNews/addAdminNews', payload).then((results) => {
            context.commit('addAdminNews', results.data)
          })
        },

        deleteAdminNews(context, payload){
          return axios.delete('http://localhost:8000/adminNews/deleteAdminNews/'+payload.id, payload).then((results) => {
            context.commit('deleteAdminNews', results.data)
          })
        },

        editAdminNews(context, payload){
          console.log(payload)
          return axios.patch('http://localhost:8000/adminNews/editAdminNews/'+payload.id, payload).then((results) => {
            context.commit('editAdminNews', results.data)
          })
        },
        // End Admin News Actions

        // Investor Actions
        getInvestors(context) {
          console.log('Getting Investors')
          return axios.get('http://localhost:8000/investors').then((results) => {
              context.commit('getInvestors', results.data)
          })
        },

        addInvestors(context, payload){
          return axios.post('http://localhost:8000/investors/addInvestors', payload).then((results) => {
            context.commit('addInvestors', results.data)
          })
        },

        deleteInvestor(context, payload){
          return axios.delete('http://localhost:8000/investors/deleteInvestor/'+payload.id, payload).then((results) => {
            context.commit('deleteInvestor', results.data)
          })
        },

        editInvestor(context, payload){
          console.log(payload)
          return axios.patch('http://localhost:8000/investors/editInvestor/'+payload.id, payload).then((results) => {
            context.commit('editInvestor', results.data)
          })
        },


        getEntities(context) {
            console.log('Getting Entities')
            return axios.get('http://localhost:8000/investorEntities').then((results) => {
                context.commit('getEntities', results.data)
            })
        },

        addInvestorEntity(context, payload){
          return axios.post('http://localhost:8000/investorEntities/addInvestorEntity', payload).then((results) => {
            context.commit('addInvestorEntity', results.data)
          })
        },

        editInvestorEntity(context, payload){
          console.log(payload)
          return axios.patch('http://localhost:8000/investorEntities/editInvestorEntity/'+payload.id, payload).then((results) => {
            context.commit('editInvestorEntity', results.data)
          })
        },

        deleteInvestorEntity(context, payload){
          return axios.delete('http://localhost:8000/investorEntities/deleteInvestorEntity/'+payload.id, payload).then((results) => {
            context.commit('deleteInvestorEntity', results.data)
          })
        },

        // End Investor Actions

        // Investment Actions
        getInvestments(context) {
            console.log('Getting Investments')
            return axios.get('http://localhost:8000/investments').then((results) => {
                context.commit('getInvestments', results.data)
            })
        },

        addInvestment(context, payload){
          return axios.post('http://localhost:8000/investments/addInvestment', payload).then((results) => {
            context.commit('addInvestment', results.data)
          })
        },

        deleteInvestment(context, payload){
          return axios.delete('http://localhost:8000/investments/deleteInvestment/'+payload.id, payload).then((results) => {
            context.commit('deleteInvestment', results.data)
          })
        },

        editInvestment(context, payload){
          console.log(payload)
          return axios.patch('http://localhost:8000/investments/editInvestment/'+payload.id, payload).then((results) => {
            context.commit('editInvestment', results.data)
          })
        },

        addInvestmentInvestor(context, payload){
          return axios.post('http://localhost:8000/investmentInvestors/addInvestmentInvestor', payload).then((results) => {
            context.commit('addInvestmentInvestor', results.data)
          })
        },

        editInvestmentInvestor(context, payload){
          console.log(payload)
          return axios.patch('http://localhost:8000/investmentInvestors/editInvestmentInvestor/'+payload.id, payload).then((results) => {
            context.commit('editInvestmentInvestor', results.data)
          })
        },

        deleteInvestmentInvestor(context, payload){
          return axios.delete('http://localhost:8000/investmentInvestors/deleteInvestmentInvestor/'+payload.id, payload).then((results) => {
            context.commit('deleteInvestmentInvestor', results.data)
          })
        },

    },
    mutations: {

        getAdminSupers(state, adminSuper){
            state.adminSupers = adminSupers;
        },
        editAdminSuper(state, investment){
            state.adminSupers = [...state.adminSupers, adminSuper];
        },

        getAllAdminMinors(state, adminMinor){
            state.adminMinors = adminMinors;
        },
        getEntities(state, entities){
          state.entities = entities;
        },

        // Investments
        getInvestments(state, investments){
            state.investments = investments;
        },
        addInvestment(state, investment){
            state.investments = [...state.investments, investment];
        },
        deleteInvestment(state, investment){
            state.investments = [...state.investments, investment];
        },

        editInvestment(state, investment){
            state.investments = [...state.investments, investment];
        },


        // End Investments

        // Admin News
        getAdminNews(state, adminNews){
          state.adminNews = adminNews;
        },
        addAdminNews(state, adminNew){
            state.adminNews = [...state.adminNews, adminNew];
        },

        deleteAdminNews(state, adminNew){
            state.adminNews = [...state.adminNews, adminNew];
        },

        editAdminNews(state, adminNew){
            state.adminNews = [...state.adminNews, adminNew];
        },

        // End Admin News

        // Investors
        getInvestors(state, investors){
          state.investors = investors;
        },
        addInvestors(state, investor){
            state.investors = [...state.investors, investor];
        },

        deleteInvestor(state, investor){
            state.investors = [...state.investors, investor];
        },

        editInvestor(state, investor){
            state.investors = [...state.investors, investor];
        },

        getInvestorEntities(state, entities){
          state.entities = entities;
        },

        addInvestorEntity(state, entity){
          state.entities = [...state.entities, entity];
        },

        deleteInvestorEntity(state, entity){
            state.entities = [...state.entities, entity];
        },

        editInvestorEntity(state, entity){
            state.entities = [...state.entities, entity];
        },

        // End Investors
        getInvestmentInvestors(state, investmentInvestors){
            state.investmentInvestors = investmentInvestors;
        },
        addInvestmentInvestor(state, investmentInvestor){
            state.investmentInvestors = [...state.investmentInvestors, investmentInvestor];
        },
        getAllInvestorInvestmentNotes(state, investmentNotes){
            state.investmentNotes = investmentNotes;
        },
        getAllInvestorEntities(state, entities){
            state.entities = entities;
        },
    }
})

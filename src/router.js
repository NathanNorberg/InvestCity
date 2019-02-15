import Vue from 'vue'
import Router from 'vue-router'

import InvestorLoginScreen from './views/InvestorLoginScreen.vue'
/*Investor Routes */
import InvestorDashboardScreen from './views/InvestorDashboardScreen.vue'
import InvestorProfileScreen from './views/InvestorProfileScreen.vue'
import EditInvestorProfileScreen from './views/EditInvestorProfileScreen.vue'
import InvestmentNotesScreen from './views/InvestmentNotesScreen.vue'
import InvestorNewsScreen from './views/InvestorNewsScreen.vue'
import InvestorReportScreen from './views/InvestorReportScreen.vue'
/* Admin Routes */
import AdminLoginScreen from './views/AdminLoginScreen.vue'
import AdminDashboardScreen from './views/AdminDashboardScreen.vue'
import AddNewsScreen from './views/AddNewsScreen.vue'
import ViewNewsScreen from './views/ViewNewsScreen.vue'
  /* Add, View, Edit Investments */
import AddInvestmentScreen from './views/AddInvestmentScreen.vue'
import AdminInvestmentDashboardScreen from './views/AdminInvestmentDashboardScreen.vue'
import AdminNotesScreen from './views/AdminNotesScreen.vue'
import InvestmentDetailsScreen from './views/InvestmentDetailsScreen.vue'
import EditInvestmentDetailsScreen from './views/EditInvestmentDetailsScreen.vue'
  /* Add, View, Edit Investors */
import AddInvestorScreen from './views/AddInvestorScreen.vue'
import AdminInvestorDashboardScreen from './views/AdminInvestorDashboardScreen.vue'
import InvestorDetailsScreen from './views/InvestorDetailsScreen.vue'
import EditInvestorDetailsScreen from './views/EditInvestorDetailsScreen.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    { path: '/', component: InvestorLoginScreen },
    /*Investor Routes */
    { path: '/investorDashboard', component: InvestorDashboardScreen },
    { path: '/investorProfile/:id', component: InvestorProfileScreen },
    { path: '/editInvestorProfile/:id', component: EditInvestorProfileScreen },
    { path: '/investorNotes/investment/:id', component: InvestmentNotesScreen },
    { path: '/investorNews', component: InvestorNewsScreen },
    { path: '/investorReport', component: InvestorReportScreen },
    /* Admin Routes */
    { path: '/adminLogin', component: AdminLoginScreen },
    { path: '/adminDashboard', component: AdminDashboardScreen },
    { path: '/addNews', component: AddNewsScreen },
    { path: '/viewNews', component: ViewNewsScreen },
      /* Add, View, Edit Investments */
    { path: '/addInvestment', component: AddInvestmentScreen },
    { path: '/adminInvestmentDashboard', component: AdminInvestmentDashboardScreen },
    { path: '/adminNotes/investment/:id', component: AdminNotesScreen },
    { path: '/investmentDetails/:id', component: InvestmentDetailsScreen },
    { path: '/editInvestmentDetails/:id', component: EditInvestmentDetailsScreen },
      /* Add, View, Edit Investors */
    { path: '/addInvestor', component: AddInvestorScreen },
    { path: '/adminInvestorDashboard', component: AdminInvestorDashboardScreen },
    { path: '/investorDetails/:id', component: InvestorDetailsScreen },
    { path: '/editInvestorDetails/:id', component: EditInvestorDetailsScreen },

  ]
})

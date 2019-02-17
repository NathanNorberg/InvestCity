import Vue from 'vue'
import Router from 'vue-router'

import InvestorLoginScreen from './views/InvestorLoginScreen.vue'
/*Investor Routes */
import InvestorDashboardScreen from './views/InvestorDashboardScreen.vue'
import InvestorInvestmentDetailsScreen from './views/InvestorInvestmentDetailsScreen.vue'
import InvestorProfileScreen from './views/InvestorProfileScreen.vue'
import EditInvestorProfileScreen from './views/EditInvestorProfileScreen.vue'
import AddInvestmentNotesScreen from './views/AddInvestmentNotesScreen.vue'
import EditInvestmentNotesScreen from './views/EditInvestmentNotesScreen.vue'
import InvestorNewsScreen from './views/InvestorNewsScreen.vue'
import InvestorReportScreen from './views/InvestorReportScreen.vue'
/* Admin Routes */
import AdminLoginScreen from './views/AdminLoginScreen.vue'
import AdminDashboardScreen from './views/AdminDashboardScreen.vue'
import AdminProfileScreen from './views/AdminProfileScreen.vue'
import EditAdminProfileScreen from './views/EditAdminProfileScreen.vue'
import AddNewsScreen from './views/AddNewsScreen.vue'
import ManageNewsScreen from './views/ManageNewsScreen.vue'
import EditNewsScreen from './views/EditNewsScreen.vue'
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
    { path: '/investorInvestmentDetails/:id', component: InvestorInvestmentDetailsScreen },
    { path: '/investorProfile', component: InvestorProfileScreen },
    { path: '/editInvestorProfile', component: EditInvestorProfileScreen },
    { path: '/addProjectNote/:id', component: AddInvestmentNotesScreen },
    { path: '/editProjectNote/:id', component: EditInvestmentNotesScreen },
    { path: '/investorNews', component: InvestorNewsScreen },
    { path: '/investorReport', component: InvestorReportScreen },
    /* Admin Routes */
    { path: '/adminLogin', component: AdminLoginScreen },
    { path: '/adminProfile', component: AdminProfileScreen },
    { path: '/editAdminProfile', component: EditAdminProfileScreen },
    { path: '/adminDashboard', component: AdminDashboardScreen },
    { path: '/addNews', component: AddNewsScreen },
    { path: '/manageNews', component: ManageNewsScreen },
    { path: '/editNews/:id', component: EditNewsScreen },
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

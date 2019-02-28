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
import AddInvestorEntityScreen from './views/AddInvestorEntityScreen.vue'
import AdminInvestorDashboardScreen from './views/AdminInvestorDashboardScreen.vue'
import InvestorDetailsScreen from './views/InvestorDetailsScreen.vue'
import EditInvestorDetailsScreen from './views/EditInvestorDetailsScreen.vue'
/* View, Edit Investor Entity */
import EntityDetailsScreen from './views/EntityDetailsScreen.vue'
import InvestorEntityScreen from './views/InvestorEntityScreen.vue'
import EditEntityDetailsScreen from './views/EditEntityDetailsScreen.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    { path: '/', name: 'InvestorLoginScreen', component: InvestorLoginScreen },
    /*Investor Routes */
    { path: '/investorDashboard', name: 'InvestorDashboardScreen', component: InvestorDashboardScreen },
    { path: '/investorInvestmentDetails/:id', name: 'InvestorInvestmentDetailsScreen', component: InvestorInvestmentDetailsScreen },
    { path: '/investorProfile/:id', name: 'InvestorProfileScreen', component: InvestorProfileScreen },
    { path: '/investorEntity/:id', name: 'InvestorEntityScreen', component: InvestorEntityScreen },
    { path: '/editInvestorProfile/:id', name: 'EditInvestorProfileScreen', component: EditInvestorProfileScreen },
    { path: '/addProjectNote/:id', name: 'AddInvestmentNotesScreen', component: AddInvestmentNotesScreen },
    { path: '/editProjectNote/:id', name: 'EditInvestmentNotesScreen', component: EditInvestmentNotesScreen },
    { path: '/investorNews', name: 'InvestorNewsScreen', component: InvestorNewsScreen },
    { path: '/investorReport', name: 'InvestorReportScreen', component: InvestorReportScreen },
    /* Admin Routes */
    { path: '/adminLogin', name: 'AdminLoginScreen', component: AdminLoginScreen },
    { path: '/adminProfile/:id', name: 'AdminProfileScreen', component: AdminProfileScreen },
    { path: '/editAdminProfile/:id', name: 'EditAdminProfileScreen', component: EditAdminProfileScreen },
    { path: '/adminDashboard', name: 'AdminDashboardScreen', component: AdminDashboardScreen },
    { path: '/addNews', name: 'AddNewsScreen', component: AddNewsScreen },
    { path: '/manageNews', name: 'ManageNewsScreen', component: ManageNewsScreen },
    { path: '/editNews/:id', name: 'EditNewsScreen', component: EditNewsScreen },
      /* Add, View, Edit Investments */
    { path: '/addInvestment', name: 'AddInvestmentScreen', component: AddInvestmentScreen },
    { path: '/adminInvestmentDashboard', name: 'AdminInvestmentDashboardScreen', component: AdminInvestmentDashboardScreen },
    { path: '/adminNotes/investment/:id', name: 'AdminNotesScreen', component: AdminNotesScreen },
    { path: '/investmentDetails/:id', name: 'InvestmentDetailsScreen', component: InvestmentDetailsScreen },
    { path: '/editInvestmentDetails/:id', name: 'EditInvestmentDetailsScreen', component: EditInvestmentDetailsScreen },
      /* Add, View, Edit Investors */
    { path: '/addInvestor', name: 'AddInvestorScreen', component: AddInvestorScreen },
    { path: '/addInvestorEntity/:id', name: 'AddInvestorEntityScreen', component: AddInvestorEntityScreen },
    { path: '/adminInvestorDashboard', name: 'AdminInvestorDashboardScreen', component: AdminInvestorDashboardScreen },
    { path: '/investorDetails/:id', name: 'InvestorDetailsScreen', component: InvestorDetailsScreen },
    { path: '/editInvestorDetails/:id', name: 'EditInvestorDetailsScreen', component: EditInvestorDetailsScreen },
      /* View, Edit Investors */
    { path: '/entityDetails/:id', name: 'EntityDetailsScreen', component: EntityDetailsScreen },
    { path: '/editEntityDetails/:id', name: 'EditEntityDetailsScreen', component: EditEntityDetailsScreen },


  ]
})

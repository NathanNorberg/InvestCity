import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import InvestorLogin from './component/InvestorLogin.vue'
/*Investor Routes */
import InvestorDashboard from './component/InvestorDashboard.vue'
import InvestorProfile from './component/InvestorProfile.vue'
import EditInvestorProfile from './component/EditInvestorProfile.vue'
import InvestmentNotes from './component/InvestmentNotes.vue'
import InvestorNews from './component/InvestorNews.vue'
import InvestorReport from './component/InvestorReport.vue'
/* Admin Routes */
import AdminLogin from './component/AdminLogin.vue'
import AdminDashboard from './component/AdminDashboard.vue'
import AddNews from './component/AddNews.vue'
import ViewNews from './component/ViewNews.vue'
  /* Add, View, Edit Investments */
import AddInvestment from './component/AddInvestment.vue'
import AdminInvestmentDashboard from './component/AdminInvestmentDashboard.vue'
import AdminNotes from './component/AdminNotes.vue'
import InvestmentDetails from './component/InvestmentDetails.vue'
import EditInvestmentDetails from './component/EditInvestmentDetails.vue'
  /* Add, View, Edit Investors */
import AddInvestor from './component/AddInvestor.vue'
import AdminInvestorDashboard from './component/AdminInvestorDashboard.vue'
import InvestorDetails from './component/InvestorDetails.vue'
import EditInvestorDetails from './component/EditInvestorDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    { path: '/', component: InvestorLogin },
    /*Investor Routes */
    { path: '/investorDashboard', component: InvestorDashboard },
    { path: '/investorProfile/:id', component: InvestorProfile },
    { path: '/editInvestorProfile/:id', component: EditInvestorProfile },
    { path: '/investorNotes/investment/:id', component: InvestmentNotes },
    { path: '/investorNews', component: InvestorNews },
    { path: '/investorReport', component: InvestorReport },
    /* Admin Routes */
    { path: '/adminLogin', component: AdminLogin },
    { path: '/adminDashboard', component: AdminDashboard },
    { path: '/addNews', component: AddNews },
    { path: '/viewNews', component: ViewNews },
      /* Add, View, Edit Investments */
    { path: '/addInvestment', component: AddInvestment },
    { path: '/adminInvestmentDashboard', component: AdminInvestmentDashboard },
    { path: '/adminNotes/investment/:id', component: AdminNotes },
    { path: '/investmentDetails/:id', component: InvestmentDetails },
    { path: '/editInvestmentDetails/:id', component: EditInvestmentDetails },
      /* Add, View, Edit Investors */
    { path: '/addInvestor', component: AddInvestor },
    { path: '/adminInvestorDashboard', component: AdminInvestmentDashboard },
    { path: '/investorDetails/:id', component: InvestorDetails },
    { path: '/editInvestorDetails/:id', component: EditInvestorDetails },

  ]
})

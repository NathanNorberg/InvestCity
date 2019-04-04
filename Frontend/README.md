# InvestCity

## Project Description
This capstone project InvestCity was completed in a 13 day period during the 6-month Galvanize Web Development program.  InvestCity allows for a company to create investment projects, specify who invested in it, the capital invested and update the investment progress so that the investors as well as the company can have a central location to easily view their investment information and print off reports on investments.

## What problem does your project solve?
This InvestCity, was created in collaboration with Cowley Norberg Investments (CNI) to track their investment properties and allows investors to see the ROI of each investment as well as receive updates on current investments. CNI lacked a centralized location for investment data as well as ease of use on the current website for both the admin side as well as the investor side. InvestCity provides a solution for CNI and other companies so that their investors can stay updated on investment progress and information.

## How will your project solve this problem?
InvestCity gives the CNI admin and investors a one stop site to be able to create new investment projects, edit them, add users (investros), view all past and current investments as well as view reports on all investments they have made..  Investors will be able to view individual investments details, the capital invested.

## What inputs does it need?
Investors:
* Name
* Email
* Phone Number
* Address (City, State)
  * Investor Entity Name
  * Address (Country, State, City)
  * Contact Number
  * Entity Notes
Admin:
* Creating / Editing Investments
  * Type of Investment
  * Grouping
  * Investment Name
  * Brief Description
  * Purchase Date
  * Purchase Price
  * Investors Involved
    * Amount Invested
  * State
  * County
  * City
  * Location
  * Size
  * Status (Current || Sold)
  * Date Sold
  * Detailed Description  
* Investment Notes
* Investment Documents
* News / Announcements

## What outputs does it produce?
* Overall investment progress
* Individual investment reports for each investor/entity


## What technologies do you plan to use?
* Node
* Vue
* Vuex
* Vuetify

## Prioritized Feature list (Label stretch features with STRETCH)
* Create Investor
  * Add Investor Information
* Add Entities to Investors
* Create Investment Project
  * Adding Investors
  * Adding Investement Notes/Updates
* Editing and Updating Investors/Investments
* Adding News
* Investor View to see all Involved Investments
* Investor Edit Profile
* Investor Add Notes to Project

STRETCH
* Full Report Outlining Deeper Project Details


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

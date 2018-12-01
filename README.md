# Vue Single Page RobotBuilder Application 

### Following Things requred before clone this project
- Node > 8.0.14
- Vue CLI >= 3 (you can install npm install vue-cli@3.1.12 --save)

### In This Application cover Following Vue concepts
 - #### Create Vue.js Cpmponent and Using Template Syntax
    - Binding Attributes to Data (Using v-bind and Shorthand Binding :)
    - Bind to Computed Properties
    - Dispaying Data with Interpolation using dubble mustage ({{}})
    - Conditionaaly Displaying Data (v-if and v-show)
    - Repeating Elemets with v-for
    - Styling Componts and child coponents
    - Conditionally Applying Style and css calsses
    - Using SASS preprocessor (lang='scss')
    - Component Lifecycle Hooks (created and updated)
    - Reduction Duplication with Mixins
 - #### Enabling Inter-component Communication
    - Creating Child Components
    - Using Props to share data with child components
    - Valdation Props (type and required data and validation funtion)
    - Passing Data from Child Component to Parent Component (Using this.$emit('Name',data))
    -  Inject Content info a child component(Using slot)
    
 - #### Routing from Page to Page
    - Adding Routign to your page (Using npm install vue-router --save)
    - Adding Routee in app (router-view and router-link)
    - Styling link based on the active link
    - programmitically Navigation (this.$route.push('/') or :to="{name:}")
    - Router Params and passin Params as Props (using props=true)
    - HTML5 History Mode
    - Working with router guard (beforeRouteLeave,beforeEnter)
  
 - #### Managing State and Server Communication with Vuex
    - Install Vuex and Create a Vues Store (npm install vuex --save and import Vuex from 'vuex', Vue.use(Vuex),new Vuex.Store({}))
    - Changing Vuex Store using mutations
    - Retreving Itms from the Vuex store (this.$store.state.cart)
    - Data filter using Vuex getters 
    - Using Vuex Actions to work with API (npm insatll axios --save)
    - Get and Post Data using Vuex Action and also retuing Promises from Action
    - Organzing the store with modules
    - Namespacing Modeles and Namespaced Getters
    - Vuex MapStates,MapGetters,MapActions,MapMutations Helper functions
 - #### Creating Customm Directives and Filters
    - Custome Directive and passing Data to directive (v-pin="{right:'10px',top:'10px'}")
    - Diective Lifecycle Hooks
    - Making Directive Available Global
    -Creating a custome filter
 - #### Deploying Vre Applcation to Production
    - Run this command on bash npm start build vue CIL create dist folder for you
    - Put this dist folder witch server you want 
    
 
    
# Some Extra Commands
# bulid-a-robot

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

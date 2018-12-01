import Vue from 'vue'
import Vuex from 'vuex'
import RobotModules from './modules/robot'
import UserModules from './modules/user'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    robot: RobotModules,
    user: UserModules
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../home/HomePage.vue'
import RobotBulider from '../bulid/RobotBulider.vue'
import PartInfo from '../parts/Partinfo.vue'
import BrowsePart from '../parts/BrowsePart.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import RobotBases from '../parts/RobotBases.vue'
import RobotHead from '../parts/RobotHeads.vue'
import SidebarStander from '../sidebar/SidebarStander.vue'
import SidebarBulid from '../sidebar/SidebarBulid.vue'
import ShoppingCart from '../cart/ShoppingCart.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStander
    }
  }, {
    path: '/bulid',
    name: 'Bulid',
    components: {
      default: RobotBulider,
      sidebar: SidebarBulid
    }
  }, {
    path: '/parts/browse',
    name: 'Browse',
    component: BrowsePart,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHead
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms
      }, {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos
      }, {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases
      }
    ]

  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter (to, form, next) {
      const validId = Number.isInteger(Number(to.params.id))
      next(validId)
    }
  }, {
    name: 'cart',
    path: '/cart',
    component: ShoppingCart
  }]
})

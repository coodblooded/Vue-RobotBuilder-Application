<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name:'Home'}" class="nav-link" exact>
            <img class="logo" src="./assets/build-a-bot-logo.png"/>
            Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'Bulid'}" class="nav-link" exact>
            Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link to="/cart" class="nav-link" exact>
            Cart
            </router-link>
            <div class="cart-item">{{cart.length}}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside-bar">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue'
// import RobotBulider from './bulid/RobotBulider.vue'

export default {
  name: 'app',
  data () {
    return {
      cart: this.$store.state.robot.cart
    }
  }

}
</script>

<style >
body{
  background: linear-gradient(to bottom, rgb(77, 135, 168), rgb(38, 163, 142), rgb(179, 53, 101));
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}

main{
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;

}

header{
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
 ul{
   margin: 3px;
   display: flex;
 }
 .nav-item{
   display: inline-block;
   padding: 5px 10px;
   font-size: 22px;
   border-right: 1px solid #bbb;

 }
 .logo{
   vertical-align: middle;
   height: 40px;
 }
 .nav-link{
   text-decoration: none;
   color: inherit;
 }
 .nav-item.cart{
   position: relative;
   margin-left: auto;
   border-right: none;


 }
 .router-link-active{
   color: white;
 }
 .container{
   display: flex;
   margin: 10px auto 0 auto;
   justify-content: center;
 }
 .aside-bar{
   padding: 30px;
   background-color: gray;
   width: 100px;
   min-height: 300px;

 }
 .cart-item{
   position: absolute;
   top: -5px;
   right: -9px;
   font-size: 18px;
   width: 20px;
   text-align: center;
   display: inline-block;
   border-radius: 100px;
   background-color: mediumaquamarine;

 }
</style>

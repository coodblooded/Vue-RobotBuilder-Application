<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.heads.title}}
          </td>
          <td class="cost">
            {{robot.cost}}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="cartonsale">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartOnSale" :key="index">
          <td class="robot-title">
            {{robot.heads.title}}
          </td>
          <td class="cost">
            {{robot.cost}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart () {
      return this.$store.state.robot.cart
    },
    cartOnSale () {
      return this.$store.getters['robot/cartOnSale']
    }
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
.cartonsale{
  margin-top: 50px;
  color: red;

}
</style>

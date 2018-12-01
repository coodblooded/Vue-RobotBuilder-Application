<template>
   <div v-if="avaliableParts" class="content">
    <div class="preview">
     <CollapsibleSection>
      <div class="preview-content">
        <div class="top-row">
          <img :src="SelectedRobot.heads.src"/>
        </div>
        <div class="middle-row">
          <img :src="SelectedRobot.leftarms.src" class="rotate-left"/>
          <img :src="SelectedRobot.torsos.src"/>
          <img :src="SelectedRobot.rightarms.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="SelectedRobot.bases.src"/>
        </div>
      </div>
    </CollapsibleSection>
  <button @click="addTocart()" class="add-to-cart"> Add Cart</button>

    </div>

    <div class="top-row">
      <!-- <div :class="[saleBoderClass, 'top', 'part']">
        <div class="robot-name">
          {{SelectedRobot.heads.title}}
          <span class="sale" v-if="SelectedRobot.heads.onSale">Sale !!</span>
        </div>
        </div> -->
      <PartSelected :parts="avaliableParts.heads" position="top" @Partselector="part => SelectedRobot.heads=part"/>

    </div>
    <div class="middle-row">
      <PartSelected :parts="avaliableParts.arms" position="left" @Partselector="part => SelectedRobot.leftarms=part"/>
      <PartSelected :parts="avaliableParts.torsos" position="center" @Partselector="part => SelectedRobot.torsos=part"/>
      <PartSelected :parts="avaliableParts.arms" position="right" @Partselector="part => SelectedRobot.rightarms=part"/>
    </div>
    <div class="bottom-row">
      <PartSelected :parts="avaliableParts.bases" position="bottom" @Partselector="part => SelectedRobot.bases=part"/>
    </div>
  </div>
</template>
<script>
import createdhookmixin from './created-hook-mixin'
import PartSelected from './PartSelector.vue'
import CollapsibleSection from '../shared/collasibleSection.vue'
export default {
  name: 'RobotBulider',
  created () {
    this.$store.dispatch('robot/getParts')
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedTocart) {
      next(true)
    } else {
      const response = confirm('You have noy added your robot to yuor cart. are you sure you want to leave?')
      next(response)
    }
  },
  components: { PartSelected, CollapsibleSection },
  data () {
    return {
      addedTocart: false,
      cart: [],
      SelectedRobot: {
          heads: {},
          leftarms: {},
          rightarms: {},
          torsos: {},
          bases: {}
        }
    }
  },
  mixins:[createdhookmixin],
  computed: {
    avaliableParts () {
      return this.$store.state.robot.parts
    },
    saleBoderClass () {
      return this.SelectedRobot.heads.onSale ? 'sale-border' : ''

    },
  },
  methods: {
    addTocart () {
      const robot = this.SelectedRobot;
      const cost = robot.heads.cost + robot.leftarms.cost + robot.rightarms.cost  + robot.torsos.cost + robot.bases.cost
      this.$store.dispatch('robot/addTocart', Object.assign({}, robot, { cost }))
        .then(() => this.$router.push('/cart'))
      this.addedTocart = true
    },
  }
}
</script>



<style lang="scss">
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width:165px;
  }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.cart{
  position: relative;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;

}
.sale{
  color: red;
}
.content{
  position: relative;
}
.add-to-cart{
  position: absolute;
  width: 210px;
  font-size: 16px;
}

.sale-border{
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>

export default {
  created () {
    this.$store.dispatch('robot/getParts')
  },
  computed: {
    parts () {
      return this.$store.state.robot.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: []
      }
    }
  }
}

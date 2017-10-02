<template>
  <div id='app'>
    <h1>SOMETHING</h1>
    <p>
      cordovaReady:
      <b>{{ cordovaReady }}</b>
    </p>
    <p @click="toggleTestBoolean">
      this.$store.state.testBoolean:
      <b>{{ testBoolean }}</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello!',
      cordovaReady: false
    }
  },
  methods: {
    toggleTestBoolean () {
      this.$store.commit('toggleTestBoolean')
    }
  },
  computed: {
    testBoolean () {
      return this.$store.state.testBoolean
    }
  },
  watch: {},
  mounted () {
    document.addEventListener('deviceready', () => {
      this.cordovaReady = true
    }, false)
  }
}
</script>

<style lang='scss'>
@import '../sass/variables';
#app {
  padding: 20px;
}
</style>

<template>
    <div>
        Hello World {{a}}
        <button @click="addOne">addOne</button>
        <button @click="b">b</button>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  created: function() {
    console.log('home');
    
  },
  computed: mapState({
    a: state => state.a.count
  }),
  //   methods: mapActions('a', [
  //     'addOne'
  //   ]),
  methods: {
    ...mapActions("a", ["addOne"]),
    //...mapActions(["a/addOne"]),
    b: function() {
      alert(1);
    }
  }
};
</script>
<style>
</style>


<template>
    <div>
        Hello World test {{a}} {{id}} {{test}}
        <button @click="addOne({count:5})">addOne</button>
        <button @click="b">b</button>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "test",
  props:['id'],
  created: function() {
    console.log("test");
    console.log(this.$route.params.id);
    this.$store.dispatch('a/addOne',{count:10})
  },
  computed: {
    ...mapState({
      a: state => state.a.count
    }),
    test:(context)=>{console.log(context.$route.params.id);return 0},
    // id: function() {
    //   return this.$route.params.id;
    // }
  },
  //   methods: mapActions('a', [
  //     'addOne'
  //   ]),
  methods: {
    ...mapActions("a", ["addOne"]),
    b: function() {
      alert(1);
    }
  }
};
</script>
<style>
</style>


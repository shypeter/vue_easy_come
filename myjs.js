Vue.component('mycounter', {
  props: ['title'],
  data: function() {
    return {
      count: 0
    }
  },
  template: '<div><button v-on:click="addCounter">{{title}} you click {{count}}</button><slot></slot></div>',
  methods:{
    addCounter: function() {
      this.count++;
      this.$emit('clickcounter', this.count);
    }
  }
})

var myVue = new Vue({
  el: "#app",
  data: {
   htmlCode:'<span style="color:red">fox</span>',
   del: 'del',
   isDel: true,
   isDelBak: true,
   ten: 10,
   result: 1,
   message: "hello world",
   status: true,
   vsParam: true,
   myGray: "#3F33FF",
   small: "5em",
   myCheckBox: [],
   myRadio: '',
   items: [
     {message: "a"},
     {message: "b"}
   ]
  },
  components:{
    scopcomponent: {
      props:["title"],
      data: function() {
        return {scount: 0, name:"Peter"}
      },
      template: '<div><button v-on:click="sAddCounter">{{title}} scop component {{name}} {{scount}}</button></div>',
      methods: {
        sAddCount: function() {
          this.scount++;
        }
      }
    }
  },
  methods:{
    click1: function() {
      console.log("click1");
    },
    click2: function() {
      console.log("click2");
    },
    doThat: function() {
      console.log("ha");
    },
    clickcounter: function(number) {
      console.log(number)
    }
  }
  /*,mounted(){
    setTimeout(function(){
      this.isDelBak = false
    }, 2000)
  }*/
})

setTimeout(function(){
myVue.isDelBak = false;  
}, 2000);

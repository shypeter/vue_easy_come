Vue.component('counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">you click {{count}}</button>'
})

var myVue = new Vue({
  el: "#app",
  data: {
   htmlCode:'<span style="color:red">fox</span>',
   del: 'del',
   isDel: true,
   isDelBak: true,
   ten: 10,
   result: 10,
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
  methods:{
    click1: function() {
      console.log("click1");
    },
    click2: function() {
      console.log("click2");
    },
    doThat: function() {
      console.log("ha");
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

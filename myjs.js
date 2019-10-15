var myVue = new Vue({
  el: "#app",
  data: {
   htmlCode:'<span style="color:red">fox</span>',
   del: 'del',
   isDel: true,
   isDelBak: true,
   ten: 10,
   result: 102,
   message: "hello world",
   status: true,
   vsParam: true,
   myGray: "#3F33FF",
   small: "5em",
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

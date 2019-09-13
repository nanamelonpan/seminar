Vue.component('fu', {
  template: '  <polygon @click="move()" :points="points" stroke = "black" fill = "wheat"></polygon>',
  props: ["x","y","teban"],
  computed:{
    points:function(){
      if (this.teban==0){

        // pstr ="";
        // pstr +=(parseInt(this.x)*100+" ");
        // pstr +=(parseInt(this.y)*100+" ");
        // pstr +=(100+parseInt(this.x)*100+" ");
        // pstr +=(parseInt(this.y)*100+" ");
        // pstr +=(50+parseInt(this.x)*100+" ");
        // pstr +=(100+parseInt(this.y)*100+" ");

                pstr ="";
                pstr +=(5+parseInt(this.x)*100+" ");
                pstr +=(parseInt(this.y)*100+" ");
                pstr +=(10+parseInt(this.x)*100+" ");
                pstr +=(70+parseInt(this.y)*100+" ");
                pstr +=(50+parseInt(this.x)*100+" ");
                pstr +=(100+parseInt(this.y)*100+" ");
                pstr +=(90+parseInt(this.x)*100+" ");
                pstr +=(70+parseInt(this.y)*100+" ");
                pstr +=(95+parseInt(this.x)*100+" ");
                pstr +=(parseInt(this.y)*100+" ");

        // return "0 0 100 0 50 100";

            // return "5 0 10 70 50 100 90 70 95 0";
        return pstr;
      }
      else {
        pstr ="";
        pstr +=(5+parseInt(this.x)*100+" ");
        pstr +=(100+parseInt(this.y)*100+" ");
        pstr +=(10+parseInt(this.x)*100+" ");
        pstr +=(30+parseInt(this.y)*100+" ");
        pstr +=(50+parseInt(this.x)*100+" ");
        pstr +=(parseInt(this.y)*100+" ");

        pstr +=(90+parseInt(this.x)*100+" ");
        pstr +=(30+parseInt(this.y)*100+" ");

                pstr +=(95+parseInt(this.x)*100+" ");
                pstr +=(100+parseInt(this.y)*100+" ");
// return "0 100 100 100 50 0";



  // return "5 100 10 30 50 0 90 30 95 100";
        return pstr;
      }
    }
  },

  methods:{
    move:function(){
      // alert("aiueo")
      this.$emit("move")
    }

  }

})

  new Vue({
    el:"#app",
    data:{
      fu:[{x:1,y:1,teban:0},{x:3,y:3,teban:1}],
      ou:[{x:1,y:1,teban:0},{x:3,y:3,teban:1}],
      gin:[{x:0,y:0,teban:0},{x:0,y:0,teban:1}]
    },
    methods:{
      move:function(){
        alert("abc")
      }
    }
  })

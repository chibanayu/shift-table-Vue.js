Vue.createApp({
  data: function () {
      member: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"]
  },
  // methods: {
  //   btnClick: function () {
  //     this.member;
  //   }
  // }
  methods:{
      'random': function(){
        let rnd = Math.floor(Math.random() * this.member.length);
        return this.member[rnd];
      }
    }
}).mount("#app");

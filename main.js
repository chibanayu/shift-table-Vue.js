Vue.createApp({
  data: function () {
    return {
      member: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"]
      newMember: ""
    }
  },
  methods: {
    btnClick: function () {
      this.member;
    }
  },
  computed: {
    random: function () {
        let newMember = []
        this.member.forEach(num => {
          newMember.push(this.member[Math.floor(Math.random() * num)])
        })
      return newMember
      }
  }
}).mount("#app");

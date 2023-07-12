Vue.createApp({
  data: function () {
    return {
      member: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"]
    }
  },
  methods: {
    btnClick: function () {
      random(this.member, 6)
    }
  },
  computed: {
    random: function (arrayData, count) {
      var count = count || 1;
      var arrayData = arrayData;
      let newMember = []
      for (var i = 0; i < count; i++) {
        var arrayIndex = Math.floor(Math.random() * arrayData.length);
        newMember[i] = arrayData[arrayIndex];
        arrayData.splice(arrayIndex, 1);
      }
      return newMember;
    }
  }
}).mount("#app");

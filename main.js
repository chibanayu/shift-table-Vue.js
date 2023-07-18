Vue.createApp({
  data: function () {
    return {
      array: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"],
      randomArray: []
    }
  },
  mounted() {
    this.randomizeArray();
  },
  computed: {
    randomizeArray() {
      // 配列をランダムにシャッフルする関数
      const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      this.randomArray = shuffleArray(this.array);
    }
  }
}).mount("#app")

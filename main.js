Vue.createApp({
  data: function () {
    return {
      names: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "山崎", "中村", "高橋", "渡辺", "山本", "吉田", "石田", "佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "山崎", "中村", "高橋", "渡辺", "山本", "吉田", "石田"],
      names6: [],
    }
  },
  methods: {
    //ボタンが押された時の処理
    buttonClick() {
      //4週分繰り返す
      for (let i = 0; i < 4; i++) {
        //月~金をdaysOfWeekに格納
        const daysOfWeek = ["月", "火", "水", "木", "金"];
      //namesの配列からデータの一部分だけ取り出しnamesCopyに格納
      const namesCopy = this.names.slice();
        const weeks = 2;
      //weeksを繰り返す
        for (let i = 0; i < weeks; i++) {
        const weekSchedule = { weekNumber: i + 1, days: [] };
        daysOfWeek.forEach((day) => {
          const daySchedule = { dayName: day, names: [] };
          //6回繰り返す
          for (let j = 0; j < 6; j++) {
            if (namesCopy.length === 0) break;
            //namesCopyの要素数を取得→ランダム→randomIndexに格納
            const randomIndex = Math.floor(Math.random() * namesCopy.length);
            daySchedule.names.push(namesCopy.splice(randomIndex, 1)[0]);
          }
          weekSchedule.days.push(daySchedule);
        });
        //names6という空の配列に追加する
        this.names6.push(weekSchedule);
      }
    }
    },
  },
  mounted() {
    for (let i = 0; i < buttonClick(); i++) {
    }
  },
}).mount("#app")

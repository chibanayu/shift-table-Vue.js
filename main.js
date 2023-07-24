Vue.createApp({
  data: function () {
    return {
      names: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "山崎", "中村", "高橋", "渡辺", "山本", "吉田", "石田"],
      names6: [],
    }
  },
  methods: {
    //ボタンが押された時の処理
    buttonClick() {
      //シャッフル関数
      function shuffle(src) {
        //空の配列を用意
        const a = []
        for (const x of src) {
          //ランダムしたものをjに格納
          const j = Math.floor(Math.random() * (a.length + 1));
          //空の配列に追加
          a.push(a[j])
          a[j] = x
        }
        return a
      }
      //4週分繰り返す
      for (let i = 0; i < 4; i++) {
        //月~金をdaysOfWeekに格納
        const daysOfWeek = ["月", "火", "水", "木", "金"];
        //namesの配列からデータの一部分だけ取り出しnamesCopyに格納
        const names1 = shuffle(this.names)
        const names2 = (names1 => {
          let temp = shuffle(this.names)
          while (names1.slice(-3).some(e => temp.slice(0, 3).includes(e))) {
            temp = shuffle(this.names)
          }
          return temp
        })(names1)
        const namesCopy = [...names1, ...names2];
        const weeks = 2;
        //weeksを繰り返す
        for (let i = 0; i < weeks; i++) {
          const weekSchedule = { weekNumber: i + 1, days: [] };
          daysOfWeek.forEach((day) => {
            const daySchedule = { dayName: day, names: [] };
            //6回繰り返す
            for (let j = 0; j < 6; j++) {
              if (namesCopy.length === 0) break;
              daySchedule.names.push(namesCopy.shift());
            }
            console.assert(new Set(daySchedule.names).size === 6 || i === 1)
            weekSchedule.days.push(daySchedule);
          });
          //names6という空の配列に追加する
          this.names6.push(weekSchedule);
        }
      }
    },
  },
}).mount("#app")

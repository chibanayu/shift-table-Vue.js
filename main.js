Vue.createApp({
  data: function () {
    return {
      members: ["佐藤", "伊藤", "遠藤", "鈴木", "田中", "小林", "千葉", "加藤", "相澤", "中村", "高橋", "渡辺", "山本", "吉田", "石田"],
      array: ""
    }
  },
  computed: {
    random: function () {
      let array = []
      this.members.forEach(name => {
        array.push(this.members[Math.floor(Math.random() * name)])
      })
      return array
    }
  }
}).mount("#app")

// random: function (arrayData, count) {
//   //countが設定されていない場合は1にする
//   var count = count || 1;
//   var arrayData1 = arrayData;
//   //新しい配列を用意
//   let array = []
//   for (var i = 0; i < count; i++) {
//     var arrayIndex = Math.floor(Math.random() * arrayData1);
//     array[i] = arrayData1[arrayIndex];
//     //1回選択された値は削除して再度選ばれないようにする
//     arrayData1.splice(arrayIndex, 1);
//   }
//   //配列に戻す
//   return array
// }
// }

// random: function () {
// return random(this.members, 6);
// console.log(this.members)
// }
// }

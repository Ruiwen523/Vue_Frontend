const vm = Vue.createApp({
  // 狀態屬性
  data() {
    return {
      message: "Hello ",
      name: "008JS",
      price: 100,
      quantity: 10,
      twd: 1000,
      jpy: 1,
      customId: 'item-id-1',
      isBtnDisabled: true,
      picked: 1,
      checkedNames: [],
      isChecked: true,
      selected: '',
      msg1: 'Hello ',
      msg2: 'Hello ',
      num1: 0,
      num2: 0,
      text: '<b>Hello</b>',
      isActive: true,
      hasError: true
    };
  },
  // 方法屬性
  methods: {
    subtotal: function () {
        return this.price * this.quantity;
    },    
    subtotal_ES6 () {
        // ES6
        return this.price * this. quantity;
    },
    twd2jpy () {
        this.jpy = Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
    },
    jpy2twd () {
        this.twd = Number.parseFloat(Number(this.jpy) * 0.278).toFixed(3);
    },    
  },
  // 計算屬性
  computed: {
    subtotal_cp: function () {
        return this.price * this.quantity;
    },
    jpy_cp: {
        get () {
            return Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
        },
        set (val) {
            this.twd = Number.parseFloat(Number(val) * 0.278).toFixed(3);
        }
    },
    usd_cp: {
        get () {
            return Number.parseFloat(Number(this.twd) / 28.540).toFixed(3);
        },
        set (val) {
            this.twd = Number.parseFloat(Number(val) * 28.540).toFixed(3);
        }
    },
    sum () {
        return this.num1 + this.num2;
    }
  },
}); //.mount('#app');
// document.addEventListener("DOMContentLoaded", () => {
//     // 需等待DOM載入完成後再綁定app物件
//     vm.mount('#app');
// })

const vm2 = Vue.createApp({
  template: `<div> {{ greeting }} 好棒棒!</div>`,
  data() {
    return {
      greeting: "Hello Vue.js!",
    };
  },
});

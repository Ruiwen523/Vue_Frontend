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
      customId: "item-id-1",
      isBtnDisabled: true,
      picked: 1,
      checkedNames: [],
      isChecked: true,
      selected: "",
      msg1: "Hello ",
      msg2: "Hello ",
      num1: 0,
      num2: 0,
      text: "<b>Hello</b>",
      isActive: true,
      hasError: true,
      count: 0,
      amount: 50,
      msg: [],
      pressKey: '',
      msgKeyDown: '',
      msgKeyDown2: '',
      msgKeyDown3: "",
      messages: [],
      messages2: [],
      messages3: ['1'],
    };
  },
  // 方法屬性
  methods: {
    subtotal: function () {
      return this.price * this.quantity;
    },
    subtotal_ES6() {
      // ES6
      return this.price * this.quantity;
    },
    twd2jpy() {
      this.jpy = Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
    },
    jpy2twd() {
      this.twd = Number.parseFloat(Number(this.jpy) * 0.278).toFixed(3);
    },
    ChangeIsActive() {
      this.isActive = this.isActive == true ? false : true;
    },
    ChangehasError() {
      this.hasError = this.hasError == true ? false : true;
    },
    alert(val) {
      alert(val);
      this.msg.push(val);
      window.setTimeout(() => {
        this.msg = [];
      }, 3000);
    },
    plus() {
      this.count++;
    },
    plus2(event) {
      console.log(event.target.tagName);
    },
    plus3(amount, event) {
      console.log(event.target.tagName);
      this.count += amount;
    },
    press(event) {
      this.pressKey = event.key;
      window.setTimeout(() => {
        event.target.value = '';
      }, 300);
    },
    addToMessages() {
      this.messages.push(this.msgKeyDown);
      this.msgKeyDown = '';
    },
    addToMessages2() {
      this.messages2.push(this.msgKeyDown2);
      this.msgKeyDown2 = '';
    },
    addToMessages3() {
      this.messages3.push(this.msgKeyDown3);
      this.msgKeyDown3 = '';
    }    
  },
  // 計算屬性
  computed: {
    subtotal_cp: function () {
      return this.price * this.quantity;
    },
    jpy_cp: {
      get() {
        return Number.parseFloat(Number(this.twd) / 0.278).toFixed(3);
      },
      set(val) {
        this.twd = Number.parseFloat(Number(val) * 0.278).toFixed(3);
      },
    },
    usd_cp: {
      get() {
        return Number.parseFloat(Number(this.twd) / 28.54).toFixed(3);
      },
      set(val) {
        this.twd = Number.parseFloat(Number(val) * 28.54).toFixed(3);
      },
    },
    sum() {
      return this.num1 + this.num2;
    },
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
  }
});

const vm = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue 3.0!',
            name: '008JS',
            price: 100,
            quantity: 10
        }
    }
});//.mount('#app');

// document.addEventListener("DOMContentLoaded", () => {
//     // 需等待DOM載入完成後再綁定app物件
//     vm.mount('#app');
// })
## 事前準備
預覽 MarkDown 畫面  
> `鍵入 Ctrl+P ` \> Markdown: Open Preview to the Side

開啟Chrome瀏覽器
1. 線上應用程式商店: https://chrome.google.com/webstore/ 
2. 搜尋 Vue.js devtools  

開啟VSCode至專案目錄  
npm install vue  
npm install -g @vue/cli  
npm -i vue@{version}  => 3.3.4
> 徹底弄懂npm create/init指令在說什麼  
> ref: https://juejin.cn/post/7133992076735152136  
`npm create`是`npm init`的別名   用来初始化项目的 `package.json`


```cd \<your-project-name>  
> npm install  
> npm run build
> npm run dev
```

Vue-Froundend
## Vue 前端練習筆記
如果是同樣的重複計算，用computed 來處理會比methods 效能來得好， 但要注意的是computed 屬性中的function 無法使用參數，若有需要帶入參數的情況，還是只能使用methods 來處理。

## 常見Vue實體選用Options
- 狀態(資料)屬性
  - data(){ return { message: "Hello" };},
- 方法屬性
  - methods: { sum: function() { return this.price * this.quantity; },},
  - methods: { sum_ES6() { return this.price * this.quantity; },},
- 計算屬性
  - computed: { sum_cpt: function(){ this.price * this.quantity; },},
  - computed: { sum_cpt_ES6(){ this.price * this.quantity; },},
  - computed: { sum_cpt_val{ get(){ return this.val1 + this.val2; }, set(){ this.val1 = this.val2*0.278; }}}
- 樣板屬性
  - template: `<div> {{ greeting }} 好棒棒!</div>`,
  - data() {return { greeting: "Hello Vue.js!" };},

## 常用指令(directive)
- {{ data }}
- v-bind-{屬性} or :{屬性}
  - 包含style/class/src/id等
- v-model
  - 常用來雙向綁定data狀態
- v-once
  - 僅在指定節點上渲染一次
- v-on:{事件} or @{事件}
  - 事件綁定 常見 @click 用來傳遞JS事件物件(Event Object)、參數等
- v-text
  - 將輸出渲染成純文字
- v-html
  - 將輸出渲染成HTML格式
- v-pre
  - 取消Vue將 {{ data }} 視為模板語法並作為純文字輸出

## v-model 修飾子 (Modifiers) 
- .lazy 
  - 於焦點離開輸入框時改變狀態 如同change事件
- .number 
  - 由 DOM API 取出的時候都會是以「字串」的形式出現
  - 於更新狀態時會在背後試圖將對應資料轉型為數值格式
- .trim 
  - 於更新狀態時自動去除前後空白字元


## v-on 通用修飾子
- .stop
  - 阻擋事件向外層冒泡傳遞
- .prevent
  - 阻擋元素的預設事件(取消原事件)
- caotyre
  - 用來指定事件以捕獲 (capturing) 的形式來觸發
- .self
  - 只會觸發元素自己的事件行為，由子層元素傳遞來的事件則不會觸發
- .once
  - 讓指定的事件只會觸發一次
- .passive
  - 與`addEventListener`的`passive`屬性相同
  - 用途是告訴瀏覽器這個事件處理器會不會呼叫`event.preventDefault`來停止原生行為

> 一個指令可以同時加入多個修飾子，而修飾子的**順序會影響執行的結果**。  
> 如`v-on:click.self.prevent`會先執行`self`然後執行`prevent`；換言之只會阻擋自己的行為。

## 鍵盤修飾子

- .key
- .enter
- .delete (包含`del`與`backspace`鍵)
- .esc
- .space
- .up
- .down
- .left
- .right
- .ctrl
- .alt
- .shift
- .meta
  - 對應鍵盤Win鍵

> 幾乎所有`event.key`在Vue.js都有對應的鍵盤修飾子  
> 不過需要注意的是像`PageDown`這類名稱要轉換成連字號(kebab-case)`.page-down`來使用


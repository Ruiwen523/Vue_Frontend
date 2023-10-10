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
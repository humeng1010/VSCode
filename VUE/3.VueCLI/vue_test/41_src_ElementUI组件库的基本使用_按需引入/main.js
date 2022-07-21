import Vue from 'vue';
import App from './App';


// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 关闭生产模式的警告
Vue.config.productionTip = false;
// 应用全部的ElementUI组件库 不是按需引入
// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker, Table, TableColumn } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);

new Vue({
    el: "#app",
    render: h => h(App),
})
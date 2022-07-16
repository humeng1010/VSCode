# Vue

## 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别：

    - vue.js是完整版的vue，包含：核心功能+模板解析器
    - vue.runtime.xxx.js是运行版的vue，只包含 核心功能，没有模板解析器

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

```javascript
/*
  该文件是整个项目的入口文件
*/
// 引入Vue 这个是不完整版的Vue 没有template模板解析
import Vue from 'vue'
// 引入App组件 它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象---vm
new Vue({
  el: "#app",
  // 完成了:将app组件放入容器中 这样写是因为我们引入的是不完整版的Vue 没有template模板解析
  // 完整写法
  // render(h) {
  //   return h("h1", "你好呀")
  //   return h(App)
  // }
  // es6箭头函数简化写法
  render: h => h(App)
})
```

## ref属性

1. 被用来给元素或子组件注册引用信息(id的代替者)

2. 应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象(vc)

3. 使用方式:

    - 打标识:
    ```html
    <h1 ref="xxx">......</h1>
    或
    <School ref="xxx"></School>
    ```
    - 获取:
    ```js
    this.$refs.xxx
    ```

## 配置项props

1. 功能让组件接收外部传过来的数据

    1. 传递数据

        ```html
        <Demo name="xxx"/>
        ```
    
    2. 接收数据

      - 第一种方式：只接收 
      
            props:["name"]

      - 第二种方式：限制类型 

             props:{

              name:String,

            }

      - 第三中方式：限制类型 限制必要性 指定默认值

            props:{
              name:{
                type:String,//类型
                required:true,//必要性
                default:"老王",//默认值
              }
            }

      3. 备注:props是只读的，Vue底层会监视你对props的修改，如果对props进行了修改，就会发出警告，如果业务确实需要修改，那么就复制props的内容到data中一份，然后进行修改数据。(props上的数据优先被放到vc上 data这个地方才能用this读取prop)

    ```javascript
        data() {
          return {
              msg: "我是尚硅谷的学生",
              // props上的数据优先被放到vc上 这个地方才能用this读取prop
              myName: this.name,
              myGender: this.gender,
              myAge: this.age,
          };
        },

    ```
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

## mixin(混入)
  1. 功能：可以把多个组件共用的配置提取成一个混入对象
  2. 使用方法:
      - 第一步：定义混合,例如:
          ```js
              exprot const mixin = {
                data(){
                  ...//在混入区添加上data数据 优先使用本身上的
                },
                methods(){
                  ...
                },
                mounted(){
                  ...//钩子函数会都执行 先执行混合中的
                },
              };
              exprot const mixin2 = {
                data(){
                  ...//在混入区添加上data数据 优先使用本身上的
                },
                methods(){
                  ...
                },
                mounted(){
                  ...//钩子函数会都执行 先执行混合中的
                },
              };


          ```
      - 第二步：使用混入，例如:
          ```js
              //局部混入
              //1.先引入 import {xxx} from ".."
              mixins:[xxx,xxx]

              //全局混入
              //1.先引入 import {xxx} from ".."
              Vue.mixin(xxx)
              Vue.mixin(xxx)

          ```

## Vue插件

  1. 功能:用于增强Vue
  
  2. 本质:包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

  3. 定义插件:

    plugins.js

  ```js
        // 插件
        export default {
          // install中有个参数 为Vue的缔造者 而且还可以接收Vue.use(),后面传入的参数
          install(Vue) {

              // 全局过滤器
              Vue.filter("mySlice", function (value) {
                  return value.slice(0, 4);
              });

              // 定义全局指令
              Vue.directive("fbind", {
                  // 指令与元素成功绑定时(一上来)
                  bind(element, binding) {
                      element.value = binding.value;
                  },
                  // 指令所在元素被插入页面时
                  inserted(element) {
                      // 自动获取焦点
                      element.focus()
                  },
                  // 指令所在的模板被重新解析时
                  update(element, binding) {
                      element.value = binding.value;
                  }
              });

              // 定义混入 全局
              Vue.mixin({
                  data() {
                      return {
                          x: 100,
                          y: 200,
                      }
                  }
              });

              // 给Vue原型上添加一个方法(vm和vc就都能用了)
              Vue.prototype.hello = () => { alert("你好呀") };
          }
        }

  ```

    4. 使用插件

      Vue.use();


## scoped样式

  1. 作用:让样式在局部生效，防止冲突

  2. 写法< style scoped >


## 总结TodoList案例

1. 组件化编码流程：

    ​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

    ​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

    ​			1).一个组件在用：放在组件自身即可。

    ​			2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。

    ​	(3).实现交互：从绑定事件开始。

2. props适用于：

    ​	(1).父组件 ==> 子组件 通信

    ​	(2).子组件 ==> 父组件 通信（要求父先给子一个函数）

3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。


## webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API：

    1. ```xxxxxStorage.setItem('key', 'value');```
        				该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

    2. ```xxxxxStorage.getItem('person');```

        ​		该方法接受一个键名作为参数，返回键名对应的值。

    3. ```xxxxxStorage.removeItem('key');```

        ​		该方法接受一个键名作为参数，并把该键名从存储中删除。

    4. ``` xxxxxStorage.clear()```

        ​		该方法会清空存储中的所有数据。

4. 备注：

    1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    2. LocalStorage存储的内容，需要手动清除才会消失。
    3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
    4. ```JSON.parse(null)```的结果依然是null。





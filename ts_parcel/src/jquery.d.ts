// 定义全局变量
// declare var $: (param: () => void) => {}

// 定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance
}

// 函数重载
// declare function $(readyFunc: () => void): void
// declare function $(selector: string): JqueryInstance

// 使用interface的方式实现函数重载
interface JQuery {
  (readyFunc: () => void): void
  (selector: string): JqueryInstance
}

declare var $: Jquery


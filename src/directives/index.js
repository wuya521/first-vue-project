//定义懒加载插件
import {useIntersectionObserver} from "@vueuse/core/index";

export const lazyPlugin = {
    install(app){
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el: 指令绑定的那个元素 img
                // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
                console.log(el, binding.value)
             const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }], observerElement) => {
                        console.log(isIntersecting)
                        if (isIntersecting){
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}
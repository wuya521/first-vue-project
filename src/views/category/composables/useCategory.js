//封装业务代码
import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryAPI} from "@/apis/category";


export function useCategory(){
    const categoryData = ref({})
    const  route = useRoute()
    const getCategory = async (id=route.params.id)=>{
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(()=>getCategory())

    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}
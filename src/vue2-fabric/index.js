import vue2Fabric from "./index";
const com = [vue2Fabric]
const install = function (Vue){
    com.forEach(item=>Vue.component(item.name,item))
}
export default install
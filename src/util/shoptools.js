
// 本地存储商品信息
// shop => {商品1id：商品数量,商品2id：商品数量}
let shop = JSON.parse(window.localStorage.getItem('shopInfo') || '{}')

let shopTools = {
    // 增加
    addUpdate(goods){
        // 判断是否有已经有存在该商品ID
        // 存在就进行累加 goods={id:'21', num:5}
        if(shop[goods.id]){
            shop[goods.id] += goods.num
        }else {
            shop[goods.id] = goods.num
        }
        this.saveShops()
    },
    // 删除
    delete(id){
        delete shop[id]
        this.saveShops()
    },
    // 实时存储 每次改变数据都需要存储
    saveShops() {
        window.localStorage.setItem('shopInfo', JSON.stringify(shop))
    },
    //默认要获取商品
    getShop(){
        return JSON.parse(window.localStorage.getItem('shopInfo') || '{}')
    }
}

export default shopTools
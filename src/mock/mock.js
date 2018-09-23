const swiperlist = require('./swiperlist.json')
const gridlist = require('./gridlist.json')
const sportlist = require('./sport.json')
const marketlist = require('./marketlist.json')
const lifelist = require('./lifelist.json')
const floorlist = require('./floorlist.json')
const floorlist_refresh = require('./floorlist_refresh.json')
const orderList = require('./mock_1/orderList.json')
const serverList = require('./mock_1/serverList.json')
const iconfontList = require('./mock_1/iconfontList.json')

module.exports = function(){
    return {
        swiperlist,
        gridlist,
        sportlist,
        orderList,
        serverList,
        iconfontList
    }
}
const jsonServer = require('json-server')
const server = jsonServer.create()
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
const middlewares = jsonServer.defaults()

<<<<<<< HEAD
server.use(middlewares)

server.get('/floorlist', (req, res) => {
    res.jsonp(req)
})
=======
const navList = require('./mock_1/list/navList.json')
const saleList = require('./mock_1/list/saleList.json')
const mooncake = require('./mock_1/list/mooncake.json')
const crabList = require('./mock_1/list/crabList.json')
const drinkList = require('./mock_1/list/drinkList.json')
const beverages = require('./mock_1/list/beverages.json')
const otherList = require('./mock_1/list/otherList.json')
const seasoning = require('./mock_1/list/seasoning.json')
const snacks = require('./mock_1/list/snacks.json')
const vegetables = require('./mock_1/list/vegetables.json')


>>>>>>> ljh
module.exports = function(){
    return {
        swiperlist,
        gridlist,
        sportlist,
        marketlist,
        lifelist,
        floorlist,
        floorlist_refresh,

        orderList,
        serverList,
<<<<<<< HEAD
        iconfontList    }
}
server.listen(9000, () => {
    console.log('JSON Server is running')
})
=======
        iconfontList,
        navList,
        saleList,
        mooncake,
        crabList,
        drinkList,
        beverages,
        otherList,
        seasoning,
        snacks,
        vegetables,

    }
}
>>>>>>> ljh

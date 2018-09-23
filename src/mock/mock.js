const swiperlist = require('./swiperlist.json')
const gridlist = require('./gridlist.json')
const sportlist = require('./sport.json')
const marketlist = require('./marketlist.json')
const lifelist = require('./lifelist.json')
const floorlist = require('./floorlist.json')
const floorlist_refresh = require('./floorlist_refresh.json')

module.exports = function(){
    return {
        swiperlist,
        gridlist,
        sportlist,
        marketlist,
        lifelist,
        floorlist,
        floorlist_refresh
    }
}
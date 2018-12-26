let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

const ListStore = Object.assign({}, EventEmitter.prototype, {
    // 保存数据
    items: "",
    // 读取数据（是为了获取当前数据初始值的,这个跟EventEmitter无关）
    getAll: function () {
        return this.items;
    },
    // 修改数据操作
    addNewItemHandler: function (text) {
        this.items = text;
    },
    // 发出一个"change"事件（这个函数调用了emit,这是EventEmitter提供的功能,用来广播一个特定事件,第一个参数是事件名称,字符串.这个方法是一个做汇总的模块用的）
    emitChange: function () {
        this.emit('change111');
    },
    // Store 需要在变动后向 View 发送"change"事件，因此它必须实现事件接口
    // （addChangeListener:添加监听,用EventEmitter提供的on进行绑定,第一个参数是事件名称,第二个参数是对应的回调函数,这个函数将在View界面传过来）
    addChangeListener1: function(callback) {
        this.on('change111', callback);
    },
    // removeChangeListener:移除,跟on功能相关,但是删除对应的回调函数要和添加的时候是同一个,这跟JQ移除事件的要求是相同的
    removeChangeListener1: function(callback) {
        this.removeListener('change111', callback);
    }
});
module.exports = ListStore;

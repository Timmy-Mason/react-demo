import {Dispatcher} from 'flux';
let AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStores');

// 3.dispatcher 注册,触发 store
AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
            // 4. 修改数据操作
            ListStore.addNewItemHandler(action.text);
            // 5. 事件触发
            ListStore.emitChange();
            break;
        default:
    }
})

export default AppDispatcher;
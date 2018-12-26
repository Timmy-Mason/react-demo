
import AppDispatcher from '../dispatcher/AppDispatcher'
let ButtonActions = {
    addNewItem: function (text) {
        // 这里可以是异步请求,在异步请求成功的回调中，dispatch分发actions
        console.log(0);
        // 2. action 触发 dispatcher 数据分发
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
};
export default ButtonActions;
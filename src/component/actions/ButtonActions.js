
import AppDispatcher from '../dispatcher/AppDispatcher'
let ButtonActions = {
    addNewItem: function (text) {
        // 2. action 触发 dispatcher 数据分发
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },
};
export default ButtonActions;
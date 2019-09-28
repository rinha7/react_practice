import {combineReducers} from "redux"; // 흩어져 있는 리듀서들을 묶어주는 역할을 수행한다.
import user from './user';
import post from './post';

const rootReducer = combineReducers({
    user,
    post,
});

export default rootReducer;

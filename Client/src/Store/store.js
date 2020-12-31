import { createStore } from 'redux';
import changeText from '../Reducers/mainRecucer';

const store = createStore(changeText);

export default store;
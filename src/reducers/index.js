import { combineReducers } from 'redux';
import animalReducer from './animalReducer';
import selectedAnimalReducer from './selectedAnimalReducer';
/* 
import reducerTwo from 
import reducerThree */

const rootReducer = combineReducers({
    //state: (state = {}) => state
    animals : animalReducer,
    selectedAnimal: selectedAnimalReducer
});

export default rootReducer;
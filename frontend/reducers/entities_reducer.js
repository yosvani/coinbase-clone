import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import portfolioReducer from './portfolio_reducer';
import cryptoReducer from './crypto_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    portfolio: portfolioReducer,
    cryptos: cryptoReducer
});

export default entitiesReducer;
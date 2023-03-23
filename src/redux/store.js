import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { movieReducer } from './slices';

const setupStore = () => configureStore({
  reducer: rootReducer
})

const rootReducer = combineReducers({
  movieReducer
});

export {
  setupStore
}

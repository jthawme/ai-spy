import { combineReducers, createStore } from "redux";

import { gameReducer } from "./game/reducers";
import { routerReducer } from "./router/reducers";

const rootReducer = combineReducers({
  game: gameReducer,
  router: routerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
<<<<<<< Updated upstream
import RootReducer from "./Reducers/rootReducer";

const middlewares = [thunk];
=======
import logger from "redux-logger";
import rootReducer from "./Reducers/rootReducer";

const middleware = [thunk];
>>>>>>> Stashed changes

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

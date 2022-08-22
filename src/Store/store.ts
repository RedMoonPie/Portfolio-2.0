import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import appReducer, { appInitialState } from "./reducers/app/app";
import appEpic from "./epics/epics";

export const rootInitialState: RootState = {
  app: appInitialState,
};

const rootReducer = combineReducers({
  app: appReducer,
});

export const setupStore = () => {
  const epicMiddleware = createEpicMiddleware();

  const store = configureStore({
    devTools: false,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
      }).concat(epicMiddleware),
    reducer: rootReducer,
  });

  epicMiddleware.run((action$, state$) =>
    appEpic({ action$, dispatch: store.dispatch, state$ })
  );

  return store;
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/product/productSlice";

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "product"], // Reducers to persist
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };

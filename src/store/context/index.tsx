import NoSSR from "@/components/page/NoSSR";
import { storage } from "@/utils/helpers";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { appReducer } from "store/reducer";
import { TAction, TState } from "../types";

const initialState: TState = {
  ...(storage.get("state") ?? { cart: [], saveForLater: [] }),
};

const AppContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const useAppState = () => useContext(AppContext);

function AppProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <NoSSR>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </NoSSR>
  );
}

export { useAppState, AppProvider };

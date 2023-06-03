import { createContext, useContext } from "react";
import { Dispatch, SetStateAction } from "react";

export interface ICartItems {
  id: number;
  image: string;
  price: number;
  label: string;
  maxCount: number;
  count: number;
}

export interface IHis {
  orders: ICartItems[];
  date: string;
}

export type GlobalContent = {
  history: IHis[];
  setHistory: Dispatch<SetStateAction<IHis[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const MyGlobalContext = createContext<GlobalContent>({
  history: [],
  setHistory: () => {},
  loading: false,
  setLoading: () => "",
});

export const useGlobalContext = () => useContext(MyGlobalContext);
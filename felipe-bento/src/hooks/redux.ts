import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";

// Hook personalizado para acessar o dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Hook personalizado para acessar o estado global com o tipo RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

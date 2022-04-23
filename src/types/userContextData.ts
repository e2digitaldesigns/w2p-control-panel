export interface IntUserContext {}
export interface IntUserContextState {
  userState: IntUserContext;
  setUserState: React.Dispatch<React.SetStateAction<IntUserContext>>;
}

export type IntUserData = IntUserContextState;

export interface IntSystemContext {
  _id: string;
  domain: string;
  ext: string;
  isActive: boolean;
  name: string;
  primaryStore: boolean;
  storeOwnerId: string;
  storefronts: any[];
}

export interface IntSystemContextState {
  systemState: IntSystemContext;
  setSystemState: React.Dispatch<React.SetStateAction<IntSystemContext>>;
}

export type IntSystemData = IntSystemContextState;

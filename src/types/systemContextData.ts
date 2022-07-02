export interface IntSystemContextStorefronts {
  _id: string;
  domain: string;
  name: string;
  ext: string;
}

export interface IntSystemContext {
  _id: string;
  domain: string;
  ext: string;
  isActive: boolean;
  name: string;
  primaryStore: boolean;
  storeOwnerId: string;
  storefronts: IntSystemContextStorefronts[];
}

export interface IntSystemContextState {
  systemState: IntSystemContext;
  setSystemState: React.Dispatch<React.SetStateAction<IntSystemContext>>;
}

export type IntSystemData = IntSystemContextState;

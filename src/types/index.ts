/* istanbul ignore file */

export * from "./templateContextData";

export interface IntTask {
  _id: string;
  isComplete: boolean;
  text: string;
  timestamp: string;
}

export * from "./web3";
export * from "./sleep";

export class TxnLabel {
  static Null: string = "Null";
  static Withdraw: string = "Withdraw";
  static CompoundFees: string = "CompoundFees";
  static FeesSnapshot: string = "FeesSnapshot";
}

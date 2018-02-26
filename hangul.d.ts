declare class Searcher {
  public string: string;
  public disassembled: string;
  constructor(str: string);
  public search(str: string): number;
}

declare interface Hangul {
  Searcher: typeof Searcher;
  disassemble(str: string, grouped?: false): string[];
  disassemble(str: string, grouped?: true): string[][];
  disassembleToString(str: string): string;
  assemble(arr: string[]): string;
  search(a: string, b: string): number;
  rangeSearch(haystack: string, needle: string): number[][];
  isComplete(c: string): boolean;
  isCompleteAll(str: string): boolean;
  isConsonant(c: string): boolean;
  isConsonantAll(str: string): boolean;
  isHangul(c: string): boolean;
  isHangulAll(str: string): boolean;
  isVowel(c: string): boolean;
  isVowelAll(str: string): boolean;
  isCho(c: string): boolean;
  isChoAll(str: string): boolean;
  isJong(c: string): boolean;
  isJongAll(str: string): boolean;
  endsWithConsonant(c: string): boolean;
  // Alias functions.
  d(str: string, grouped?: false): string[];
  d(str: string, grouped?: true): string[][];
  ds(str: string): string;
  a(arr: string[]): string;
}

declare const hangul: Hangul;

declare module 'hangul-js' {
  export = hangul;
}

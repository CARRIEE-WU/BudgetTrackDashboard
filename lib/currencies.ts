export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "TWD", label: "NT$ Dollar", locale: "zh-TW" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  { value: "KRW", label: "₩ Won", locale: "ko-KR" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
];

export type Currency = (typeof Currencies)[0];
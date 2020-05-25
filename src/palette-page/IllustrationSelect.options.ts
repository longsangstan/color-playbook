export type OptionType = { label: string; value: string };

export const uiOptions: OptionType[] = [
  { value: "bootstrap", label: "Bootstrap" },
  { value: "material", label: "Material Design" },
];

export const graphicsOptions: OptionType[] = [
  { value: "pattern", label: "Pattern" },
  { value: "gradients", label: "Gradients" },
];

export const groupedOptions = [
  {
    label: "UI",
    options: uiOptions,
  },
  {
    label: "Graphics",
    options: graphicsOptions,
  },
];

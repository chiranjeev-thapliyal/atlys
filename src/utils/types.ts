export type ClassType =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassType[];

export type FormFieldConfig = {
  value: string;
  validate: (value: string) => boolean
}

export type FormConfig = Record<string, FormFieldConfig>

export type FormState<T extends FormConfig> = {
  [K in keyof T]: {
    value: string;
    error: boolean;
  };
};

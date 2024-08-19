import { useCallback, useMemo, useState } from "react";
import { getInitialFormState } from "../utils/helper";
import { FormConfig } from "../utils/types";

function useForm<T extends FormConfig>(config: T) {
  const initialState = getInitialFormState(config);
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback(
    (key: keyof T, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [key]: {
          value,
          error: !config[key].validate(value),
        },
      }));
    },
    [config]
  );

  const errors = useMemo(() => {
    return Object.entries(formData)
      ?.filter(([_, key]) => key?.error)
      ?.map(([key, field]) => ({ key, error: field.error }));
  }, [formData]);

  return { formData, handleChange, errors };
}

export default useForm;

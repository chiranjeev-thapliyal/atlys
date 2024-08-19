import { AUTH_CONFIG } from "../configs/auth";
import { useForm } from "../hooks";

function useAuthForm<T extends keyof typeof AUTH_CONFIG>(type: T) {
  const { formData, handleChange, errors } = useForm(AUTH_CONFIG[type]);
  const isValidFormData = errors?.length === 0;

  return { formData, handleChange, isValidFormData };
}

export default useAuthForm;

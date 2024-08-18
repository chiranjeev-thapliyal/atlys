export interface AuthContextProps {
  isAuthenticated: boolean;
  login: (event?: React.FormEvent<HTMLFormElement>) => void;
}

export const initialAuthContext: AuthContextProps = {
  isAuthenticated: false,
  login: () => {},
}

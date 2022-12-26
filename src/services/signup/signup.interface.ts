export interface SignUpResponse {
  email: string;
}

export interface SignUpPayload {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  twitter?: string;
  linkedIn?: string;
  personalWebsite?: string;
  title?: string;
  bio?: string;
  tac: boolean;
}

export interface UserProfile {
  id: number;
  primary: string;
  surface: string;
  ripple: string | boolean;
  footer: string;
  debug: string | boolean;
  theme: string;
}

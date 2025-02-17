import {environment} from "@environments/environment";

export function isProduction() {
  return environment.production;
}

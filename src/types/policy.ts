import type { ConfirmationStatus } from "./content";

export type PolicyItem = {
  label: string;
  value: string;
  status: ConfirmationStatus;
};

import { ReactNode } from "react";

export type Props = JSX.IntrinsicElements["button"] & {
    children: ReactNode;
    formId?: string;
    mode?: "primary" | "secondary" | "tertiary";
};
  
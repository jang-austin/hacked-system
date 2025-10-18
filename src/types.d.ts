declare module "hack-library" {
  import { ComponentType } from "react";

  interface ButtonProps {
    onClick?: () => void;
    className?: string;
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
  }

  export const PinkButton: ComponentType<ButtonProps>;
  export const BlueButton: ComponentType<ButtonProps>;
  export const GreenButton: ComponentType<ButtonProps>;
  export const RedButton: ComponentType<ButtonProps>;
  export const YellowButton: ComponentType<ButtonProps>;
  export const CyanButton: ComponentType<ButtonProps>;
  export const GrayButton: ComponentType<ButtonProps>;
  export const LightButton: ComponentType<ButtonProps>;
  export const DarkButton: ComponentType<ButtonProps>;
  export const PurpleButton: ComponentType<ButtonProps>;
}

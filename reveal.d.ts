import * as React from "react";

declare module "react-reveal/Fade" {
  export interface FadeProps {
    when?: boolean;
    collapse?: boolean;
    children?: React.ReactNode;
    spy?: boolean;
    duration?: number;
    delay?: number;
    count?: number;
    fraction?: number;
    forever?: boolean;
    [key: string]: any;
  }
  const Fade: React.FC<FadeProps>;
  export default Fade;
}

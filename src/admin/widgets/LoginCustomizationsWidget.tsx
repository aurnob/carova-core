import { useEffect } from "react";
import type { WidgetConfig } from "@medusajs/admin-sdk";

const LoginCustomizationsWidget = () => {
  useEffect(() => {
    // remove logo
    document
      .querySelectorAll(".mb-large")
      .forEach((DOMnode) => DOMnode.remove());
  }, []);

  return <p className="text-center">custom stuff</p>;
};

export const config: WidgetConfig = {
  zone: "login.before",
};

export default LoginCustomizationsWidget;

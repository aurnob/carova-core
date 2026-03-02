import { useEffect } from "react";
import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Heading, Text } from "@medusajs/ui";
import logoImg from "./assets/carova-logo.png";

const LoginWidget = () => {
  useEffect(() => {
    const hideElements = () => {
      // 1. Target the Logo via its unique SVG path
      const svgPath = document.querySelector('path[d*="M238.088 51.1218"]');
      const logoContainer = svgPath?.closest(
        'div[class*="shadow-buttons-neutral"]',
      );

      // 2. Target the Text Container ("Welcome to Medusa")
      // We look for the h1 with the specific Medusa text to be safe
      const welcomeHeading = Array.from(document.querySelectorAll("h1")).find(
        (el) => el.textContent === "Welcome to Medusa",
      );
      const textContainer = welcomeHeading?.closest('div[class*="flex-col"]');

      if (logoContainer) (logoContainer as HTMLElement).style.display = "none";
      if (textContainer) (textContainer as HTMLElement).style.display = "none";

      return !!(logoContainer && textContainer);
    };

    hideElements();

    const observer = new MutationObserver(() => {
      hideElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center mb-8">
      {/* Your Demo Logo */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
        <img src={logoImg} alt="Logo" className="h-12 w-12 object-contain" />
      </div>

      {/* Your Demo Welcome Text */}
      <Heading level="h1" className="text-ui-fg-base">
        Welcome to WDW Commerce
      </Heading>
      <Text className="text-ui-fg-subtle text-center mt-1">
        Please sign in to manage your commerce operations.
      </Text>
    </div>
  );
};

export const config = defineWidgetConfig({
  zone: "login.before",
});

export default LoginWidget;

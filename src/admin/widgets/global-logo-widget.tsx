import { useEffect } from "react";
import { defineWidgetConfig } from "@medusajs/admin-sdk";
import logoAsset from "./assets/carova-logo.png";

const GlobalLogoWidget = () => {
  useEffect(() => {
    let observer: MutationObserver | null = null;

    const fetchStoreFirstLetter = async (): Promise<string | null> => {
      try {
        const res = await fetch("/admin/stores", { credentials: "include" });
        if (!res.ok) return null;

        const data = await res.json();
        // V2 Fix: data.stores is an array
        const storeName: string | undefined = data?.stores?.[0]?.name;

        return storeName?.trim().charAt(0) ?? null;
      } catch (err) {
        console.error("Failed to fetch store:", err);
        return null;
      }
    };

    const swapSidebarLogo = (storeFirstLetter: string) => {
      const spans = document.querySelectorAll("span.txt-compact-xsmall-plus");

      spans.forEach((span) => {
        const spanEl = span as HTMLElement;
        const alreadyHasLogo = spanEl.querySelector(".custom-sidebar-logo");

        if (
          spanEl.textContent === storeFirstLetter &&
          !alreadyHasLogo &&
          // Scope Check: Ensure it's inside the sidebar header button
          spanEl.closest(".bg-ui-bg-subtle.sticky.top-0")
        ) {
          spanEl.textContent = "";

          const img = document.createElement("img");
          img.src = logoAsset;
          img.alt = "Carova Logo";
          img.className = "custom-sidebar-logo w-full h-full object-contain";

          spanEl.appendChild(img);

          spanEl.style.backgroundColor = "transparent";
          spanEl.style.display = "flex";
          spanEl.style.alignItems = "center";
          spanEl.style.justifyContent = "center";
        }
      });
    };

    const init = async () => {
      const firstLetter = await fetchStoreFirstLetter();
      if (!firstLetter) return;

      swapSidebarLogo(firstLetter);

      observer = new MutationObserver(() => swapSidebarLogo(firstLetter));
      observer.observe(document.body, { childList: true, subtree: true });
    };

    init();
    return () => observer?.disconnect();
  }, []);

  return null;
};

export const config = defineWidgetConfig({
  zone: [
    "product.list.before",
    "order.list.before",
    "customer.list.before",
    "promotion.list.before",
  ],
});

export default GlobalLogoWidget;

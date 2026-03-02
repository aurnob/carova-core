import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container } from "@medusajs/ui";

const CarovaLogoWidget = () => {
  return (
    <Container className="flex justify-center p-8 mb-4">
      <img
        /* The '/' refers to the 'public' folder. 
           Medusa automatically maps this during the build.
        */
        src="/carova-logo.png"
        alt="Carova Logo"
        className="h-12 w-auto"
      />
    </Container>
  );
};

export const config = defineWidgetConfig({
  zone: "order.list.before",
});

export default CarovaLogoWidget;

import { defineRouteConfig } from "@medusajs/admin-sdk";
import { Container, Heading, Text } from "@medusajs/ui";
import { RocketLaunch } from "@medusajs/icons";

const DashboardPage = () => {
  return (
    <Container className="flex flex-col gap-y-4 p-8">
      <div className="flex items-center gap-x-4">
        {/* You can import and use an <img> tag here for your Carova Logo */}
        <div className="bg-ui-bg-interactive w-12 h-12 rounded-lg flex items-center justify-center">
          <RocketLaunch className="text-ui-fg-on-color" />
        </div>
        <div>
          <Heading level="h1">Carova Command Center</Heading>
          <Text className="text-ui-fg-subtle">
            Welcome back. Manage your commerce engine below.
          </Text>
        </div>
      </div>

      <hr className="border-ui-border-base" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Container className="p-4">
          <Heading level="h2">Quick Stats</Heading>
          {/* Add your custom business metrics here */}
        </Container>
      </div>
    </Container>
  );
};

export const config = defineRouteConfig({
  label: "Carova Dashboard",
  icon: RocketLaunch,
});

export default DashboardPage;

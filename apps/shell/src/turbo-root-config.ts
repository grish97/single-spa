import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./activity-functions";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

registerApplication(
  "@turbo/react-layout",
  () => System.import("@turbo/react-layout"),
  isActive.reactLayout,
);

registerApplication(
  "@turbo/vue-auth",
  () => System.import("@turbo/vue-auth"),
  isActive.vueAuth,
);

registerApplication(
  "@turbo/react-dashboard",
  () => System.import("@turbo/react-dashboard"),
  isActive.reactDashboard,
);


layoutEngine.activate();
start();

import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@bp/react",
  app: () => System.import("@bp/react"),
  activeWhen: ["/"],
});

registerApplication({
  name: "angular",
  app: () => System.import("angular"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});

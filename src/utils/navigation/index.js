export const activeRoute = (links, path) =>
  `${links.findIndex(link => link.path === path)}`;

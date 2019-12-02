export const activeRoute = (links, path) =>
  links.find(link => link.path === path).key;

export const activeRoute = (links, path) => {
  const link = links.find(link => link.path === `/${path.split("/")[1]}`);
  return link ? link.key : "";
};

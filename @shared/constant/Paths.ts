export const Paths = {
  Home: "/",
  Blogs: "/blogs",
  About: "/about",
  Resume: "/resume",
  Portfolio: "/portfolio",
  Contact: "/contact",
  ProjetDetails: (_id = ":_id") => `/portfolio/project/${_id}`,
};

export const getPathname = (pathname) => {
  if (pathname.split("/").length === 6) {
    pathname =
      "/" +
      pathname.split("/")[1] +
      "/" +
      pathname.split("/")[2] +
      "/" +
      pathname.split("/")[3] +
      "/" +
      pathname.split("/")[4];
    return pathname;
  } else if (
    (pathname.split("/").length === 4 &&
      pathname.split("/")[2] === "category") ||
    (pathname.split("/").length === 4 && pathname.split("/")[2] === "tag")
  ) {
    pathname =
      "/" +
      pathname.split("/")[1] +
      "/" +
      pathname.split("/")[2] +
      "/" +
      pathname.split("/")[3] +
      "/page";
    return pathname;
  } else if (pathname.split("/").length === 4) {
    pathname = "/" + pathname.split("/")[1] + "/" + pathname.split("/")[2];
    return pathname;
  } else if (pathname.split("/").length === 2) {
    pathname = pathname + "/page";
    return pathname;
  }
};

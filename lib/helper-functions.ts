export const getTodayDate = () => {
  return new Date().toJSON().slice(0, 10).replace(/-/g, "-");
};
export const ValidateEmail: (mail: string) => boolean = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
};

export const readableDate = (dateString: string) => {
  return new Date(dateString)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replaceAll("/", ".");
};

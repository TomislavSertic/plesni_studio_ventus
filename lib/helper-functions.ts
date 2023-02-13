export const getTodayDate = () => {
  return new Date().toJSON().slice(0, 10).replace(/-/g, "-");
};
export const ValidateEmail: (mail: string) => boolean = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
};

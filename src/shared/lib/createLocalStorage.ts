export const createLocalStorage = (key: string) => {
  const getData = () => {
    const data = localStorage.getItem(key);
    if (data) return data;
    return "";
  };
  const setData = (value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      throw new Error("Saving data in local storage was failed");
    }
  };
  return {
    data: getData(),
    setData,
  };
};

// import "./style.css";
// this funciton will take an objet and an array as its parameter. then it will generate a new object and return dynamic fields comparing the array and the object that we have passed into it.
const pickFunc = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
) => {
  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

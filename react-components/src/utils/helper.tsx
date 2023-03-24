import { RefObject } from 'react';

// const createObj = (
//   ...args: Array<RefObject<HTMLInputElement | HTMLSelectElement>>
// ) => {
//   const obj = {} as ICard;
//   args.forEach((el) => {
//     const elem = el?.current as HTMLInputElement;
//     const key = elem.name as keyof ICard;
//     obj[key] = elem.value;
//   });

//   return obj;
// };

const getFile = (fileRef: RefObject<HTMLInputElement>) => {
  return URL.createObjectURL(fileRef.current?.files?.[0] as Blob);
};
export default getFile;

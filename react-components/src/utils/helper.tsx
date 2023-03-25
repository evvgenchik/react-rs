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

// const getFile = (file: File) => {
//   const blobLink = file.current?.files?.[0];
//   console.log(blobLink?.type);
//   if (!blobLink) return '';
//   return URL.createObjectURL(blobLink as Blob);
// };

export default {};

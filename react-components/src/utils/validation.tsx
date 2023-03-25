import { ICardNoValidate } from './types';

const validator = {
  name: (value: string) => value[0].toUpperCase() === value[0],

  description: (value: string) => value.split(' ').length >= 3,

  date: (value: string) =>
    Date.parse(value) && new Date(value).getTime() >= new Date().getTime(),

  // format: (value: string) => {
  //   return true;
  // },
  agreement: (value: string) => value === 'true',
  // language: (value: string) => {
  //   return true;
  // },
  icon: (value: File) => value.type.split('/')[0] === 'image',
};

const isValid = (obj: ICardNoValidate) => {
  let result = true;
  const keys = Object.keys(obj);

  keys.forEach((el) => {
    const key = el as keyof ICardNoValidate;
    const value = obj[key] as string | undefined;
    if (!value || !validator[key](value)) {
      result = false;
    }
  });

  return result;
};

export default isValid;

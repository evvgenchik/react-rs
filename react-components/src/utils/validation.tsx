import { IValidator } from './types';

const validator: IValidator = {
  title(value: string) {
    return (
      value[0].toUpperCase() === value[0] ||
      'Name must start with an uppercase letter'
    );
  },
  description(value: string) {
    return (
      value.split(' ').length >= 3 ||
      'Description must contain at least three words'
    );
  },
  date(value: string) {
    return (
      (Date.parse(value) && new Date(value).getTime() < new Date().getTime()) ||
      'Date must not be future'
    );
  },
  icon(value: FileList | string) {
    return (
      (typeof value !== 'string' && value[0].type.split('/')[0] === 'image') ||
      'Please add correct image format'
    );
  },
  agreement(value: string) {
    return value || 'Please confirm the agreement';
  },
};

export default validator;

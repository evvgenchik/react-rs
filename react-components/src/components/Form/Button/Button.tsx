import { FormEvent } from 'react';

const Button = ({ onSubmit }: { onSubmit: (e: FormEvent) => void }) => {
  return <input onSubmit={onSubmit} type="submit" value="Add" />;
};

export default Button;

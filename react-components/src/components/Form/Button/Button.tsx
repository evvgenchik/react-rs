import { FormEvent } from 'react';

const Button = ({ handleSubmit }: { handleSubmit: (e: FormEvent) => void }) => {
  return <input onSubmit={handleSubmit} type="submit" value="Add" />;
};

export default Button;

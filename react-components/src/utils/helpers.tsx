function filterKeyEnter(handler: () => void) {
  return (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'enter') {
      handler();
    }
  };
}

export default filterKeyEnter;

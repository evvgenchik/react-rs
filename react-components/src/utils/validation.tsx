const validator = (inputHtml: HTMLInputElement | HTMLInputElement[]) => {
  if (Array.isArray(inputHtml)) {
    const CheckedInput = inputHtml.find((input) => input.checked);

    if (!CheckedInput) {
      return 'Please select format';
    }
    return '';
  }

  const { value } = inputHtml;

  switch (inputHtml.name) {
    case 'title':
      if (!value || value[0].toUpperCase() !== value[0]) {
        return 'Name must start with an uppercase letter';
      }
      break;

    case 'description':
      if (!value || value.split(' ').length < 3) {
        return 'Description must contain at least three words';
      }
      break;

    case 'date':
      if (
        !value ||
        !Date.parse(value) ||
        new Date(value).getTime() >= new Date().getTime()
      ) {
        return 'Date must not be future';
      }
      break;

    case 'language':
      if (!inputHtml.value) return 'Please select language';
      break;

    case 'icon': {
      const fileInput = inputHtml.files?.[0];
      if (!fileInput) {
        return 'Please add image';
      }
      if (fileInput.type.split('/')[0] !== 'image') {
        return 'Please add correct image format';
      }
      break;
    }

    case 'agreement':
      if (!inputHtml.checked) return 'Please confirm your agreement';
      break;
    default:
      return '';
  }
  return '';
};

export default validator;

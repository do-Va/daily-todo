export const selectedItems = (array) => {
  let count = 0;

  array.map((item) => item.isChecked && count++);

  return count;
};

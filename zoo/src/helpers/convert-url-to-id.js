const normalizeId = value => {
  if (!value) {
    return value;
  }

  return value.split('v=')[1];
}

export default normalizeId;

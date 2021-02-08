import React from 'react';

const convertToBase64 = file => {
  const preview = document.getElementById('image');

  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = () => {
      preview.src = reader.result;
      preview.alt = file.name;

      const result = reader.result.split(',')[1];

      resolve(result);
    };

    reader.readAsDataURL(file);
  });
}

const getNewFile = async (files) => {
  const t = files.length ? await { data: await convertToBase64(files[0]), name: files[0].name }: {};
  return t;
}
const handleChange = handler => async ({ target: { files } }) => {
  const newFile = await getNewFile(files);

  return handler(newFile);
}

export default ({
  input: { onChange, onBlur, value: omitValue, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <div>
    <input type="file" id="file"
      onChange={handleChange(onChange)} onBlur={handleChange(onBlur)}
      {...inputProps} {...props} />
      <img id="image" width="200" height="150" alt="" />
  </div>
);

/* eslint-disable max-len */
export const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const name = formData.get('name');
  // const price = formData.get('price');
  // const rating = formData.get('rating');
  const images = formData.getAll('images');
  const material = formData.get('material');
  const sizes = formData.get('sizes');

  // const title = formData.get('title');
  // const price = formData.get('price');
  // const rating = formData.get('rating');
  // const images = formData.getAll('images');
  // const country = formData.get('country');
  // const city = formData.get('city');

  if (name === null || name instanceof File || name.length < 2) throw new Error('incorrect name');
  // if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  // if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (material === null || material instanceof File || material.length < 2) throw new Error('incorrect Material');
  if (sizes === null || sizes instanceof File || sizes.length < 2) throw new Error('incorrect Sizes');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  // if (title === null || title instanceof File || title.length < 2) throw new Error('incorrect Title');
  //   if (name === null || name instanceof File || name.length < 2) throw new Error('incorrect name');
  // if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  // if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  // if (country === null || country instanceof File || country.length < 2) throw new Error('incorrect Country');
  // if (city === null || city instanceof File || city.length < 2) throw new Error('incorrect City');
  // images.forEach((img, i) => {
  //   if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  // });

  return {
    name,
    details: {
      material,
      sizes,
    },
    images: images as string[],
    // price: `${Number(price).toFixed(2)}€`,
    // rating: Number(rating),
  };

  // return {
  //   title,
  //   location: {
  //     country,
  //     city,
  //   },
  //   images: images as string[],
  //   price: `${Number(price).toFixed(2)}€`,
  //   rating: Number(rating),
  // };
};

// const formatValues = (form: HTMLFormElement) => {
//   const formData = new FormData(form);

//   const name = formData.get('name');
//   // const price = formData.get('price');
//   // const rating = formData.get('rating');
//   const images = formData.getAll('images');
//   const material = formData.get('material');
//   const sizes = formData.get('sizes');

//   if (name === null || name instanceof File || name.length < 2) throw new Error('incorrect name');
//   // if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
//   // if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
//   if (material === null || material instanceof File || material.length < 2) throw new Error('incorrect Material');
//   if (sizes === null || sizes instanceof File || sizes.length < 2) throw new Error('incorrect Sizes');
//   images.forEach((img, i) => {
//     if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
//   });

//   return {
//     name,
//     details: {
//       material,
//       sizes,
//     },
//     images: images as string[],
//     // price: `${Number(price).toFixed(2)}€`,
//     // rating: Number(rating),
//   };
// };

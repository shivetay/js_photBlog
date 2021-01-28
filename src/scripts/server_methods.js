export const getPhotos = async () => {
  const res = await fetch(`http://localhost:3000/photos`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    throw new Error('error');
  }
};

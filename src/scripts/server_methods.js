const url =
  '//' +
  window.location.hostname +
  (window.location.hostname == 'localhost' ? ':4000' : '');

export const getPhotos = async () => {
  const res = await fetch(`https://${url}/photos`, {
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

export const postPhoto = async (data) => {
  const res = await fetch(`https://${url}/photos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export const deltePhoto = async (data) => {
  const res = await fetch(`https://${url}/photos/${data}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = 'Photo delted...';
  console.log('removed');
  return resData;
};

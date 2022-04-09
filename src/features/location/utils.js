// eslint-disable-next-line import/prefer-default-export
export const getCurrentPositionAsync = (options) =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });

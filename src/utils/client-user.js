let __data = null;

let Client = {
  login: () => {
    let __data = {
      name: 'Jon Doe',
      email: 'jondoe@todosobrejs.com'
    };
    return new Promise(resolve => setTimeout(() => resolve(__data), 2000))
  },
  logout: () => {
    __data = null;
    return new Promise(resolve => setTimeout(() => resolve(__data), 2000))
  }
};

export default Client;

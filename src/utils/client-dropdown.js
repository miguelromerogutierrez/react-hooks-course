let __data = [];
let Client = {
  load: () => {
    let data = ['element0', 'element1'];
    __data = data;
    return new Promise(resolve => setTimeout(() => resolve(__data), 2000))
  },
  refresh: () => {
    let data = __data;
    data.push(`element${data.length+1}`);
    __data = data;
    return new Promise(resolve => setTimeout(() => resolve(__data), 2000))
  }
};

export default Client;

const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // eslint-disable-next-line
  return s4() + "" + s4() + "" + s4() + "" + s4();
};

const awesomeFunction = () => 'I am just an Awesome Function';

export default defaultAwesomeFunction;

export { awesomeFunction, guid };

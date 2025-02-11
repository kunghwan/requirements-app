const useRandomId = () => {
  let randomId = 0;
  randomId = Math.floor(Math.random() * 1000000000000000);

  return randomId.toString();
};

export default useRandomId;

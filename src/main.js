module.exports.checkNumber = (number) => {
  return number > 0 ? number : 0;
};

module.exports.sayHello = (name) => {
  return "Hello " + name + " mister";
};

module.exports.getNames = () => {
  return ["ziad", "zrzr", "omar"];
};

module.exports.getUser = (userId, username) => {
  return { id: userId, name: username };
};

module.exports.loginUser = (email) => {
  if (!email) {
    throw new Error("Email is required");
  }
  return { id: 1, email };
};

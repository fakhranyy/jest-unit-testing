module.exports.getBook = (bookId) => {
  return new Promise((resolve, reject) => {
    if (bookId === 1) {
      resolve({ id: 1, title: "book 1" });
    } else {
      reject({ errorMessage: "invalid id" });
    }
  });
};

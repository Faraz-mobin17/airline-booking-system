const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch(next);
};

module.exports = asyncHandler;

// function asyncHandler(requestHandler) {
//   return function (req, res, next) {
//     return Promise.resolve(requestHandler(req, res, next)).catch(next);
//   };
// }

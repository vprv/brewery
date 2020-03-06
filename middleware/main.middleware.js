module.exports = (req, res, next) => {
  try {
    next()
  } catch (e) {
    res.status(401).json({message: 'Error. Middleware failed'})
  }
};

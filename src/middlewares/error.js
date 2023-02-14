const error = (err, _req, res, _next) => {
  const status = err.status || '500';
  const message = err.message || 'Error inesperado. Por favor, tentar novamente';
  return res.status(status).json({ message });
};

module.exports = error;
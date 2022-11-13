function health(req, res) {
  const healthCheck = `HEALTHCHECK: If you can see this message, then HURRAY! Server is in good health.`;
  console.log(healthCheck);
  res.send(healthCheck);
}

module.exports = { health };

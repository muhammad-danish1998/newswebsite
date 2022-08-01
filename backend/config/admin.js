module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d92c321332214ab929f0e215daaa071'),
  },
});

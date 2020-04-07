export default {
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  jwtSecret: process.env.JWT_SECRET,
  pages: {
    index: "/",
    login: "/login"
  },
  apis: {
    login: "/api/login",
    signup: "/api/signup",
    checkToken: "/api/checkToken",
    createDonation: "/api/createDonation",
    createNonprofit: "/api/createNonprofit",
    getDefaultNonprofitId: "/api/getDefaultNonprofitId"
  }
};

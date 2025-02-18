import { Sequelize } from "sequelize";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

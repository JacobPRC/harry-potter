require("dotenv").config();
const faunadb = require("faunadb");
const query = faunadb.query;

function createClient() {
  if (!process.env.FAUNA_ADMIN) {
    throw new Error(
      `No FAUNA_ADMIN key in found, please check your fauna dashboard or create a new key.`
    );
  }
  const client = new faunadb.Client({
    secret: fnAD_zOgI3ACBjG8mmST1UtDFj9KmZrE7P18uuEb,
  });
  return client;
}
exports.client = createClient();
exports.query = query;

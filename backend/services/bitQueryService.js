const axios = require("axios");
require("dotenv").config();

const BITQUERY_API_URL = process.env.BITQUERY_API_URL;
const BITQUERY_API_KEY = process.env.BITQUERY_API_KEY;

async function getTopWhaleTransactions() {
  const query = `
   {
        ethereum(network: bsc) {
            transfers(
                options: {limit: 10, desc: "amount"},
                date: {since: "2024-10-01T00:00:00Z", till: "2024-10-02T00:00:00Z"}
            ) {
                amount
                currency {
                    symbol
                }
                sender {
                    address
                }
                receiver {
                    address
                }
                date {
                    date
                }
            }
        }
    }`;

  try {
    const response = await axios.post(
      BITQUERY_API_URL,
      {
        query,
      },
      {
        headers: {
          "X-API-KEY": BITQUERY_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Bitquery:", error);
    throw error;
  }
}

module.exports = { getTopWhaleTransactions };

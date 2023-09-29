// pages/api/getProducts.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const url = 'https://demo-store-controlf5.myshopify.com/admin/api/2023-07/products.json';
    const apiKey = '45880e62786c3b0d2ad5ab66ff561d97';
    const password = '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';

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'insomnia/2023.5.8',
        'Authorization': 'Basic ' + btoa(apiKey + ':' + password),
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
};

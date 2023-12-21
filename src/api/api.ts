import axios from 'axios';

import { SearchCriteria } from '../types/types'; // Update the path if necessary

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getStatistics = async (criteria: SearchCriteria) => {
  const response = await axios.get(`${API_BASE_URL}/path-to-resource`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    params: {
      // Replace these with actual parameters
      regionOrDepartment: criteria.regionOrDepartment,
      year: criteria.year,
      // Add other parameters as needed
    },
  });

  return response.data;
};

export { getStatistics };
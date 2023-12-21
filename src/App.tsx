import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import UnemploymentChart from './components/UnemploymentChart';
import PopulationChart from './components/PopulationChart'; // Import the PopulationChart component
import ConstructionChart from './components/ConstructionChart'; // Make sure to import the ConstructionChart

import { SearchCriteria } from './types/types';
import styles from './App.module.css'; // or wherever your CSS file is located


function App() {
  const defaultUnemploymentData = [
    { name: 'Region A', unemploymentRate: 7.2 },
    { name: 'Region B', unemploymentRate: 8.5 },
    { name: 'Region C', unemploymentRate: 6.9 },
  ];

  const defaultPopulationData = [
    { name: 'Region A', population: 500000 },
    { name: 'Region B', population: 1200000 },
    { name: 'Region C', population: 800000 },
  ];

  const defaultConstructionData = [
    { name: 'Region A', construction: 120 },
    { name: 'Region B', construction: 150 },
    { name: 'Region C', construction: 100 },
  ];

  const [unemploymentData, setUnemploymentData] = useState(defaultUnemploymentData);
  const [populationData, setPopulationData] = useState(defaultPopulationData); 
  const [constructionData, setConstructionData] = useState(defaultConstructionData);


  const handleSearch = (criteria: SearchCriteria) => {
    // Implement data fetching based on search criteria
    console.log(criteria);
    // Here you would set the data based on the fetched results
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <div className={styles.chartContainer}>
        <h2 className={styles.chartTitle}>Unemployment Rate</h2>
        <UnemploymentChart data={unemploymentData} />
      </div>
      <div className={styles.chartContainer}>
        <h2 className={styles.chartTitle}>Population</h2>
        <PopulationChart data={populationData} />
      </div>
      <div className={styles.chartContainer}>
        <h2 className={styles.chartTitle}>Construction</h2>
        <ConstructionChart data={constructionData} />
      </div>
    </div>
  );
}

export default App;
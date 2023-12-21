import React, { useState } from "react";
import { SearchCriteria } from "../types/types"; // Adjust the path as necessary
import styles from './SearchForm.module.css'; // Import the CSS module


interface SearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [criteria, setCriteria] = useState<SearchCriteria>({
    regionOrDepartment: "",
    year: new Date().getFullYear(),
    dataType: "",
    populationSize: 2000,
    unemploymentRate: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: name === 'year' || name === 'populationSize' || name === 'unemploymentRate' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        className={styles.searchInput}
        name="regionOrDepartment"
        value={criteria.regionOrDepartment}
        onChange={handleInputChange}
        placeholder="Region or Department"
      />
      <input
        className={styles.searchInput}
        type="number"
        name="year"
        value={criteria.year}
        onChange={handleInputChange}
        placeholder="Year"
      />
      <input
        className={styles.searchInput}
        name="dataType"
        value={criteria.dataType}
        onChange={handleInputChange}
        placeholder="Type of Data"
      />
      <input
        className={styles.searchInput}
        type="number"
        name="populationSize"
        value={criteria.populationSize}
        onChange={handleInputChange}
        placeholder="Population Size"
      />
      <input
        className={styles.searchInput}
        type="number"
        name="unemploymentRate"
        value={criteria.unemploymentRate}
        onChange={handleInputChange}
        placeholder="Unemployment Rate"
      />
      <button className={styles.searchButton} type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
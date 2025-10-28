import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import styles from './Profile.module.css';

const Profile = () => {
  const [salaryIncrease, setSalaryIncrease] = useState(0);

  return (
    <div className={styles.container}>
      <h1>Remote 1 React Profile Page</h1>
      <div className={styles.card}>
        <div className={styles.cover}>
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </div>
        <div className={styles.body}>
          <p>This is the profile page of the Remote 1 React Application.</p>
        </div>
        <div className={styles.footer}>
          <p>Increase salary by {salaryIncrease}%</p>
          <button onClick={() => setSalaryIncrease(salaryIncrease + 1)}>
            Increase Salary
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

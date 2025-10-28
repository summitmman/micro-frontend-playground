import { useState } from 'react';
import viteLogo from '/vite.svg';
import styles from './Profile.module.css';

const Profile = () => {
  const [salaryIncrease, setSalaryIncrease] = useState(0);

  return (
    <div className={styles.container}>
      <h1>Host React Profile Page</h1>
      <div className={styles.card}>
        <div className={styles.cover}>
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </div>
        <div className={styles.body}>
          <p>This is the profile page of the Host React Application.</p>
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

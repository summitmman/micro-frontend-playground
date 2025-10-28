import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [message, setMessage] = useState('Host React Sidebar');
  return <aside className={styles.sidebarContainer}>
    <div className={styles.sidebarHeader}>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textInput}
        placeholder="Enter your message..."
      />
    </div>
    <div className={styles.sidebarBody}>
      {Array.from(message).map((char, index) => <div key={char + index}>{char}</div>)}
    </div>
  </aside>;
};

export default Sidebar;
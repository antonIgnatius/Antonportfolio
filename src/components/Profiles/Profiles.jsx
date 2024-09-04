import React from "react";
import styles from "./Profiles.module.css";
import { getImageUrl } from "../../utils"; // Assuming getImageUrl is in utils

export const Profiles = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Coding Profiles</h2>
      <div className={styles.profilesContent}>
        <div className={styles.profileLinks}>
          <div className={styles.profileLink}>
            <img src={getImageUrl('profile/leetcode.png')} alt="LeetCode" className={styles.profileIcon} />
            <div className={styles.profileInfo}>
              <h3>LeetCode:</h3>
              <p>Explore my solutions to a variety of coding challenges on LeetCode. I've tackled problems ranging from easy to hard, improving my algorithmic skills and problem-solving abilities.</p>
              <a href="https://leetcode.com/u/ignatiusanton/" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
          <div className={styles.profileLink}>
            <img src={getImageUrl('profile/codechef.png')} alt="CodeChef" className={styles.profileIcon} />
            <div className={styles.profileInfo}>
              <h3>CodeChef:</h3>
              <p>Check out my competitive programming achievements and participate in contests on CodeChef. I regularly challenge myself to solve complex problems.</p>
              <a href="https://www.codechef.com/users/ignatius_anton" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
          <div className={styles.profileLink}>
            <img src={getImageUrl('profile/hackerrank.png')} alt="HackerRank" className={styles.profileIcon} />
            <div className={styles.profileInfo}>
              <h3>HackerRank:</h3>
              <p>Discover my contributions and coding skills on HackerRank. I participate in various challenges and skill assessments to enhance my programming knowledge and expertise.</p>
              <a href="https://www.hackerrank.com/profile/ignatiusanton211" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
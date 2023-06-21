"use client";

import React from "react";
import { AppContext } from "../components/AuthProvider/AuthProvider";
import { useContext } from "react";
import styles from './Dashboard.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";
const Dashboard = () => {
  const { authState, logoutUser } = useContext(AppContext);
 
  let router = useRouter();
  if (!authState.token) {
    // router.push("/dashboard/login");
  }

  return <div className={styles.dashboard}>
    <h1>Welcome</h1>
    {/* <p>No data available</p> */}
    {/* <Link href={'dashboard/login'}>logoin</Link> */}
    
  </div>
};

export default Dashboard;

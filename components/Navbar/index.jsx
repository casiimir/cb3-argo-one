import NavLogo from "./NavLogo";
<<<<<<< HEAD
import styles from './styles.module.scss'
import React, {useState} from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

export default function Navbar() {

    return (
        <div className={styles.Navbar}>
            <NavLogo />
            <Navigation />
            <MobileNavigation />
        </div>
    )
}
=======
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <NavLogo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
>>>>>>> dev

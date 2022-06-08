import NavLogo from "./NavLogo";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
<<<<<<< Updated upstream
<<<<<<< HEAD
  return (
    <>
      <div className={styles.Navbar}>
        <NavLogo />
        <Navigation />
        <MobileNavigation />
      </div>
    </>
  );
}
=======

    return (
        <div className={styles.Navbar}>
            <NavLogo />
            <Navigation />
            <MobileNavigation />
        </div>
    );
};

>>>>>>> dev
=======
  return (
    <div className={styles.Navbar}>
      <NavLogo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
>>>>>>> Stashed changes

'use client';
import { Button, Typography } from "@mui/material";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={scss.header}>
      <ul className={scss.menu}>
        <li><Link href='/' className={scss.logo}><Typography variant='h6' className={scss.logo}></Typography>Courses</Link></li>

        <li><Link href="/"><Typography>Home</Typography></Link></li>
        
        <li><Link href="/profile"><Typography>Profile</Typography></Link></li>
      </ul>
      <div className={scss.buttonMenu}>
        <Button variant = 'contained' color="success">Sign In</Button>
        <Button variant = 'contained' color="error">Sign Out</Button>
        <Button variant = 'contained' color="info">Register</Button>
      </div>
    </header>
  );
};

export default Header;
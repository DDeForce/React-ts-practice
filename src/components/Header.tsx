import { FC } from 'react'

import classes from "./css/Header.module.css"
import logo from "../assets/logo.png"

const styles = {
    lastButton: {
        backgroundColor:" #9C5B3D",
    },
  };

const Header: FC = () => {
  return (
    <div className={classes.header}>
        <img src={logo} alt="Logo" className={classes.logo}/>
        <div className={classes.fakeButtonDiv}>
        <button  className={classes.fakeButton} />
        <button  className={classes.fakeButton} />
        <button  className={classes.fakeButton} style={styles.lastButton} />
        </div>
    </div>
  )
}

export default Header
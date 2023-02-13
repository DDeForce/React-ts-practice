import {FC, useContext} from 'react';
import { StuffContext } from '../contexts/StuffContext';

import classes from './css/InfoPanel.module.css';

interface Props {
  setSelected: (value: number) => void,
}

const InfoPanel: FC<Props> = ( {setSelected} ) => {
  const stuff = useContext(StuffContext);
  const person = stuff.personInfo;
  
  const closePanel = () => {
    setSelected(-1)
    stuff.setInfoPanelVisibility(false)
  }

  return (
    <div className={classes.infoPanel}>
      <div>
        <label>Name: </label>
        <div className={classes.paragraphDiv}>
          <p>{person?.firstName}</p> 
        </div>
      </div>
      <div>
        <label>Surname: </label>
        <div className={classes.paragraphDiv}>
          <p>{person?.lastName}</p> 
        </div>
      </div>
      <div>
        <label>Sex: </label>
        <div className={classes.paragraphDiv}>
          <p>{person?.sex === "m" ? "Male" : "Female"}</p> 
        </div>
      </div>
      <div>
        <label>City: </label>
        <div className={classes.paragraphDiv}>
          <p>{person?.city}</p> 
        </div>
      </div>
      <div>
        <label>Profession: </label>
        <div className={classes.paragraphDiv}>
          <p>{person?.profession}</p> 
        </div>
      </div>

      <button onClick={() => closePanel()}>Close</button>
    </div>
  )
}

export default InfoPanel
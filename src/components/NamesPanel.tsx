import { FC, useContext, useState } from 'react'
import { StuffContext } from '../contexts/StuffContext';
import InfoPanel from './InfoPanel';

import classes from './css/NamePanel.module.css';


const NamesPanel: FC = () => {
  const stuff = useContext(StuffContext);
  const [selected, setSelected] = useState<number>();

  const openInfoPanel = (id: number) => {
    setSelected(id);
    stuff.openInfo(id);
  }

  return (
    <div className={classes.container}>
      <div className={!stuff.infoPanelVisibility ? classes.namePanel : classes.openNamePanel}>
        {stuff.stuff.map(person =>
          <div 
            className={classes.name}
            style={selected === person.id ? {"marginRight": "0px", "borderRadius": "5px 0px 0px 5px"} : {}}
            
            key={person.id} 
            onClick={() => openInfoPanel(person.id)}
          >
            <h2>{person.firstName} {person.lastName}</h2>
            <button 
              onClick={() => openInfoPanel(person.id)}
              style={selected === person.id ? {"backgroundColor": "#BBBABA", "color": "gray"} : {}}
            >
              see more
            </button>
          </div>
        )}
      </div>
    {stuff.infoPanelVisibility ? <InfoPanel setSelected={setSelected}/> : null}
    </div>
  )
}

export default NamesPanel;
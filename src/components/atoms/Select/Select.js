import * as React from 'react';
import styles from './Select.module.css'
import ImageAtomLocal from '../imageAtom/ImageAtomLocal';

//Flags
import ENG from "~/assets/static/icons/navbar/flags/Eng.png"


export default function Select({
    Text,
    Options,
    optionsIcons
}) {

  const [value, setValue] = React.useState('');
  const [icon, setIcon] = React.useState(ENG);

  const handleChange = (event) => {
    setValue(event.target.value)
    setIcon(optionsIcons[event.target.value])
  };

  return (
    <div className='flex items-center content-center lg:ml-9'>
       <ImageAtomLocal src={icon} alt="icon" imagesize="px20" border="none" ImageStyleProps="" />
      <label>
        {Text}
        <select id='xyz' value={value} onChange={handleChange} className={`${styles.select} text-[18px] ml-2`}>
          {Options.map((option, id) => ( 
            <option key={id} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

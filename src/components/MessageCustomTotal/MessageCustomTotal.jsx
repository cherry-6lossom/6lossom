import { useState } from "react";
import styles from '@/components/MessageCustomTotal/MessageCustomTotal.module.scss';
import blossomImg1 from '@/assets/custom/cherry-blossom1.png'
import blossomImg2 from '@/assets/custom/cherry-blossom2.png'
import blossomImg3 from '@/assets/custom/cherry-blossom3.png'
import blossomImg4 from '@/assets/custom/cherry-blossom4.png'


function MessageCustomTotal () {
  const [selectBlossom, setSelectBlossom] = useState(blossomImg1)
  const [allBlossom, setAllBlossom] = useState([blossomImg1, blossomImg2, blossomImg3, blossomImg4])

  return (
    <div>
      <div className = {styles.blossomMain}>
        <img className = {styles.blossomImage} src={selectBlossom}/>
      </div>
      <div className = {styles.blossomSelect}>
        {
          allBlossom.map((blossom) => {
            return <img 
              className = {styles.blossomItems}
              src = {blossom}
              onClick = {() => {
                setSelectBlossom(blossom)
              }}
            />
          })
        }
      </div>
    </div>
  )
}
export default MessageCustomTotal;
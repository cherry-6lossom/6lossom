import styles from '@/components/MessageCustomItem/MessageCustomItem.module.scss';
import blossomImg1 from '@/assets/custom/cherry-blossom1.png';
import blossomImg2 from '@/assets/custom/cherry-blossom2.png';
import blossomImg3 from '@/assets/custom/cherry-blossom3.png';
import blossomImg4 from '@/assets/custom/cherry-blossom4.png';

function BlossomImg1() {
  return(
    <div>
      <img src={blossomImg1}/>
    </div>
  )
}

function BlossomImg2() {
  return(
    <div>
      <img src={blossomImg2}/>
    </div>
  )
}
function BlossomImg3() {
  return(
    <div>
      <img src={blossomImg3}/>
    </div>
  )
}
function BlossomImg4() {
  return(
    <div>
      <img src={blossomImg4}/>
    </div>
  )
}

export {BlossomImg1, BlossomImg2, BlossomImg3, BlossomImg4};
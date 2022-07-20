import Image from 'next/image';
import gdlogo from '../../public/images/gdlogo.png';
import headerStyles from "../../styles/header.module.css";

const header = () => {
  return (
    <div className={headerStyles.header}>
      <Image src={gdlogo} alt="logo" width="270px" height="70px"/>
      <h1>Checkout</h1>      
    </div>
  )
}

export default header
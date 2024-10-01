import imgClose from '../../../assets/closeIcon.svg'
import HeaderBtns from '../HeaderBtns/HeaderBtns'

const BurgerMenu = ({ burgerActive, setBurgerActive }) => {
    const render = (
        burgerActive &&
        <div>
                <img src={imgClose} alt="close" onClick={() => setBurgerActive(false)} />
                <HeaderBtns/>
  
      </div>
    )
    return render
    
}

export default BurgerMenu
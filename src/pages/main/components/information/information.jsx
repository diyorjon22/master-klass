import './information.css'
import { Fade } from "react-awesome-reveal";
import icon1 from '../../../../assets/images/1.png'
import icon2 from '../../../../assets/images/2-min.png'
import icon3 from '../../../../assets/images/3-min.png'
import icon4 from '../../../../assets/images/4-min.png'
import icon5 from '../../../../assets/images/5-min.png'

const Information = () => {
  return (
    <div className='Information'>
      <div className='container'>
        <div className='information-box'>
          <h1>Master Klassimizda Nimalar Bo'ladi</h1>
          <div className='icon-box'>
            <Fade direction='left'>
              <div className='icon-first'>
                <img src={icon1} alt="" />
                <h4>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Exercitationem, obcaecati?</
                h4>
              </div>
              <div className='icon-first'>
                <img src={icon2} alt="" />
                <h4>Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit. Exercitationem, obcaecati?</
                h4>
              </div>
              <div className='icon-first'>
                <img src={icon3} alt="" />
                <h4>Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit. Exercitationem, obcaecati?</
                h4>
              </div>
            </Fade>
            <Fade direction='right'>
              <div className='icon-first'>
                <img src={icon4} alt="" />
                <h4>Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit. Exercitationem, obcaecati?</
                h4>
              </div>
              <div className='icon-first'>
                <img src={icon5} alt="" />
                <h4>Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit. Exercitationem, obcaecati?</
                h4>
              </div>
              <div className='icon-first'>
                <img src={icon5} alt="" />
                <h4>Lorem ipsum dolor sit <br /> amet consectetur <br /> adipisicing elit. Exercitationem, obcaecati?</
                h4>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
import './person.css'
import { Fade } from "react-awesome-reveal";
import { Zoom } from 'react-awesome-reveal'

const Person = () => {
    return (
        <div className='Person'>
            <div className='container'>
                <div className='box'>
                    <Zoom>
                        <h1>———— Kurs <span>Muallifi</span></h1>
                        <h2>MuhammadAmir Xolmatov</h2>
                    </Zoom>
                    <div className='box-text'>
                        <Fade direction='left'>
                            <div className='first-box-text'>
                                <h4>• Shaxsiy brend bo'yicha 4 yil <br /> tajribaga ega mutaxassis</h4>
                                <h4>• 20 + odamlar yoqtirib kuzatadigan <br /> insonlarni shaxsiy brendini qurib <br />
                                    daromadlarini 5X gacha o'sishiga <br /> o'z hissasini qo'shgan</h4>
                                <h4>• $50.000 o’z blogiga pul tikkan</h4>
                            </div>
                        </Fade>
                        <Fade direction='right'>
                            <div className='first-box-text'>
                                <h4>• Ijtimoiy tarmoqlarda shaxsan <br /> o'zidada umumiy 600.000+ <br /> obunachi
                                    mavjud</h4>
                                <h4>• O’z shaxsiy brendi <br /> orqali daromadini 40 <br /> barobarda oshirgan</h4>
                                <h4>• Rossiyalik ekspertlardan <br /> 2000-6500$ gacha bo’lgan <br /> kurslarida ta’lim
                                    olgan</h4>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person
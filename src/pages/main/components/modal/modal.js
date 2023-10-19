import './modal.css'
import { Zoom } from 'react-awesome-reveal'
import { IoMdClose } from 'react-icons/io';

const Modal = ({deleteBtn}) => {
    return (
        <div className='modal-wrapper'>
            <div className='overlay'>
                <Zoom>
                    <div className='modal'>
                        <div className='modal-nav'>
                            <h1>Ro'yhatdan O'ting</h1>
                            <button onClick={deleteBtn} className='nav-btn'><IoMdClose/></button>
                        </div>
                        <form>
                            <label>
                                <span>Name</span>
                                <input type="text" />
                            </label>
                            <label>
                                <span>Number</span>
                                <input type="text" />
                            </label>
                        </form>
                        <button className='modal-btn'>Jo'natish</button>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Modal
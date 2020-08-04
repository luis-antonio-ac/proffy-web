import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/35160032?s=460&u=c2fd8dd4d7356247dafc16dc5ac823721b7bc9bd&v=4" alt="Avatar"/>
                <div>
                    <strong>Luís Antônio</strong>
                    <span>Desenvolvimento Web</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                <br/> <br/>
                Officiis, ipsam ullam. Minus necessitatibus nesciunt soluta? 
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
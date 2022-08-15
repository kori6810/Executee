import React from 'react'
import john from '../assets/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='About'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>어바웃</h2>
                    <span className='line'></span>
                    <p>Execute는 전 세계 여러 관할 지역에 사무소를 두고 있는 국제 금융 계획 회사입니다. Execute와 함께 일하는 것은 제가 살고 있는 한국에 살고 있는 외국인들에게 조언을 줄 수 있는 능력을 줍니다.</p>
                    <p>저는 Execute라는 독립 소유의 재무 계획 회사의 선임 고문인 John Doe입니다.</p>
                    <button className='button'>더 알게</button>
                </div>
            </div>
        </div>
    )
}

export default About

import React from 'react'
import user1 from '../assets/user1.webp'
import user2 from '../assets/user2.webp'
import user3 from '../assets/user3.webp'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='Testimonials'>
            <div className='container'>
                <h2>고객 평가</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>열정적이고 신뢰할 수 있는 재정 자문가를 매일 만나는 것은 아니다. John Doe는 그의 일을 정말 잘 하는 진정한 프로입니다. 고마워요, John!</p>
                        <p><span>Johnson.M.J.</span></p>
                        
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>
                        John과의 아주 짧은 두 번의 만남에서 그는 제 상황과 기대에 맞는 해결책을 찾을 수 있었습니다. 시간 엄수하고, 잘 알고, 매우 신뢰할 수 있습니다.</p> <p><span>Carol Harper</span></p>
                        
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>매우 전문적인 재정 고문으로, 약속을 지켰습니다. John은 제가 그를 알던 시간 동안 매우 성실함을 보여주었고, 제 걱정에 빠르게 반응합니다.</p>
                        <p><span>Snow.J.R.</span></p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='Demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>100명 이상의 재무 계획가,</p>
                    <p> 하나의 철학입니다</p>
                    <p>우리의 모든 재정 고문들은 (노벨 경제학상 수상자를 포함한) 학문적 연구 및 행동 금융에 기초한 John Doe의 철학에 따라 엄격한 교육을 받습니다.</p>
                    <button className='button'>무료 재무 분석</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo

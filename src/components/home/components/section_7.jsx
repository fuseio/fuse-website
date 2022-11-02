import React from 'react'
import Github from '@/assets/images/github_btn.svg'
import DevIcon from '@/assets/images/dev_small.svg'
import HeartIcon from '@/assets/images/heart_small.svg'
import GlobalIcon from '@/assets/images/global_small.svg'

function SectionSeven () {
  return (
    <section className='section_7'>
      <div className='content'>
        <div className='title'>Fuse is an open source stack built for <br /> the modern business needs</div>
        <div className='buttons'>
          <a
            className='charge'
            rel='noopener noreferrer'
            href='https://docs.fuse.io/developers/for-developers'
            target='_blank'
          >
            Developer portal
          </a>

          <a
            className='github'
            rel='noopener noreferrer'
            href='https://github.com/fuseio'
            target='_blank'
          >
            <img src={Github} />
            Go to Github
          </a>
        </div>

        <div className='boxs'>

          <div className='item'>
            <img className='icon' src={GlobalIcon} />
            <span className='text'>Globally available</span>
          </div>

          <div className='item'>
            <img className='icon' src={HeartIcon} />
            <span className='text'>Welcoming Community</span>
          </div>

          <div className='item'>
            <img className='icon' src={DevIcon} />
            <span className='text'>Powerful Tooling</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionSeven

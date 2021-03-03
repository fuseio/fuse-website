import React from 'react'

function Icons () {
  return (
    <div className='footer__icons grid-x align-justify cell small-24 medium-6'>
      <a
        rel='noreferrer noopener'
        className='footer__icon cell shrink'
        target='_blank'
        href='https://medium.com/fusenet'
      >
        <div className='medium image' />
      </a>
      <a
        rel='noreferrer noopener'
        className='footer__icon cell shrink'
        target='_blank'
        href='https://github.com/fuseio'
      >
        <div className='github image' />
      </a>
      <a
        rel='noreferrer noopener'
        className='footer__icon cell shrink'
        target='_blank'
        href='https://twitter.com/fuse_network'
      >
        <div className='twitter image' />
      </a>
      <a
        rel='noreferrer noopener'
        className='footer__icon cell shrink'
        target='_blank'
        href='https://discordapp.com/invite/jpPMeSZ'
      >
        <div className='discord image' />
      </a>
      <a
        rel='noreferrer noopener'
        className='footer__icon cell shrink'
        target='_blank'
        href='https://t.me/fuseio'
      >
        <div className='telegram image' />
      </a>
    </div>
  )
}

export default Icons

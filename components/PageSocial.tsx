import * as React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.telegram && {
    name: 'telegram',
    href: `https://t.me/${config.telegram}`,
    title: `Telegram @${config.telegram}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
    )
  },

  config.wechat && {
    name: 'wechat',
    href: `https://github.com/${config.wechat}`,
    title: `Wechat @${config.wechat}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z"/>
      </svg>
    )
  },

  config.facebook && {
    name: 'facebook',
    href: `https://www.facebook.com/${config.facebook}`,
    title: `Facebook @${config.facebook}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
              </svg>
            </div>
            <strong>{t('brand')}</strong>
            <p>{t('hero_sub')}</p>
            <a href="tel:9848651632" className={styles.footerCall}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              9848651632
            </a>
          </div>
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">{t('nav_services')}</Link>
            <Link to="/contact">{t('nav_contact')}</Link>
            <Link to="/call">{t('nav_call')}</Link>
          </div>
          <div className={styles.col}>
            <h4>{t('services_title')}</h4>
            <span>Internet & MeeSeva</span>
            <span>Real Estate</span>
            <span>Business Consultancy</span>
            <span>Financial & Tax</span>
          </div>
          <div className={styles.col}>
            <h4>{t('hours_label')}</h4>
            <span>{t('hours_val')}</span>
            <span style={{marginTop:'8px', display:'block'}}>{t('loc_label')}</span>
            <span>{t('loc_val')}</span>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p className={styles.copy}>{t('footer_copy')}</p>
          <div className={styles.badges}>
            <span className={styles.badge}>⚡ Fast Service</span>
            <span className={styles.badge}>🛡️ Trusted Partner</span>
            <span className={styles.badge}>📍 Local Expert</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

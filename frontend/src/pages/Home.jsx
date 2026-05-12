import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Home.module.css'

const trustCards = [
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    key1: 'trust1_title', 
    key2: 'trust1_desc' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H9H8" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    key1: 'trust2_title', 
    key2: 'trust2_desc' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    key1: 'trust3_title', 
    key2: 'trust3_desc' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="url(#grad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="url(#grad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    key1: 'trust4_title', 
    key2: 'trust4_desc' 
  },
]

const serviceCards = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ), 
    label: 'Internet & MeeSeva Services', 
    path: '/services?tab=internet',
    color: '#2563eb'
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ), 
    label: 'Real Estate & Construction',  
    path: '/services?tab=realestate',
    color: '#10b981'
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ), 
    label: 'Business Consultancy',        
    path: '/services?tab=business',
    color: '#7c3aed'
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ), 
    label: 'Financial & Tax Support',     
    path: '/services?tab=financial',
    color: '#f59e0b'
  },
]

export default function Home() {
  const { t } = useLang()

  return (
    <main className="page-enter">

      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        <div className={styles.shapes}>
          <div className={`${styles.shape} ${styles.s1}`} />
          <div className={`${styles.shape} ${styles.s2}`} />
          <div className={`${styles.shape} ${styles.s3}`} />
        </div>
        
        {/* Decorative Grid Overlay */}
        <div className={styles.heroGrid} />

        <div className={styles.heroInner}>
          {/* Left */}
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              {t('hero_badge')}
            </div>
            <h1 className={styles.heroTitle}>
              {t('hero_title')}<br />
              <span className="grad">{t('hero_grad')}</span>
            </h1>
            <p className={styles.heroSub}>{t('hero_sub')}</p>
            <p className={styles.heroDesc}>{t('hero_desc')}</p>

            {/* 2×2 Service Buttons */}
            <div className={styles.serviceGrid}>
              {serviceCards.map(s => (
                <Link key={s.path} to={s.path} className={styles.serviceBtn} style={{'--btn-accent': s.color}}>
                  <span className={styles.serviceBtnIcon}>{s.icon}</span>
                  <span className={styles.serviceBtnLabel}>{t(s.label)}</span>
                  <span className={styles.arrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className={styles.heroCta}>
              <Link to="/services" className="btn-primary">
                {t('hero_cta1')} 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/call" className="btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t('hero_cta2')}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className={styles.heroVisual}>
            <div className={styles.heroImgWrapper}>
              <div className={styles.heroImgGlow} />
              <img
                src="/img-hero-team.png"
                alt="Balaji Communication & Services team"
                className={styles.heroImg}
                data-slot="hero-team"
              />
              {/* Floating stat badge */}
              <div className={`${styles.floatBadge} ${styles.glass}`}>
                <div className={styles.badgeIcon} style={{background: 'var(--success)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <strong>500+ Customers</strong>
                  <span>Served successfully</span>
                </div>
              </div>
              <div className={`${styles.floatBadge2} ${styles.glass}`}>
                <div className={styles.badgeIcon} style={{background: 'var(--primary)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>Always Available</strong>
                  <span>Mon – Sat, 9AM–7PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT / OFFICE STRIP ══ */}
      <section className={styles.aboutStrip}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutImgCol}>
            <div className={styles.aboutImgFrame}>
              <img
                src="/img-hero-team.png"
                alt="Balaji Communication & Services office"
                className={styles.aboutImg}
                data-slot="about-office"
              />
              <div className={styles.imgOverlay}>
                <div className={styles.overlayPill}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                    <path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
                  </svg>
                  Our Office
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.aboutText}>
            <span className="section-label">{t('About Us', 'About Us')}</span>
            <h2 className="section-title">
              Your Trusted Local <span className="grad">Service Partner</span>
            </h2>
            <p>We are a one-stop service center helping local families and businesses with government applications, real estate, business registration, and financial support — all under one roof.</p>
            
            <div className={styles.aboutGrid}>
              <div className={styles.aboutItem}>
                <div className={styles.aboutIcon}>✓</div>
                <span>500+ customers served</span>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutIcon}>✓</div>
                <span>4 major service categories</span>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutIcon}>✓</div>
                <span>Transparent, honest pricing</span>
              </div>
              <div className={styles.aboutItem}>
                <div className={styles.aboutIcon}>✓</div>
                <span>Personal support every step</span>
              </div>
            </div>

            <div className={styles.founderBox}>
              <div className={styles.founderHeader}>
                <div className={styles.founderAvatar}>
                  {t('Potti Srinivasulu', 'Potti Srinivasulu').split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <strong>{t('Founder & Proprietor', 'Founder & Proprietor')}</strong>
                  <span className={styles.founderName}>{t('Potti Srinivasulu', 'Potti Srinivasulu')}</span>
                </div>
              </div>
              <p>{t('With 15+ years of trusted experience serving customers through internet services, MeeSeva, real estate, consultancy, and business support.', 'With 15+ years of trusted experience serving customers through internet services, MeeSeva, real estate, consultancy, and business support.')}</p>
            </div>
            
            <Link to="/contact" className="btn-primary" style={{marginTop:'8px'}}>
              {t('Talk to an Expert', 'Talk to an Expert')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className={styles.whySection}>
        <div className="section-wrap">
          <div className={styles.sectionHead}>
            <span className="section-label">{t('why_label')}</span>
            <h2 className="section-title">{t('why_title')}</h2>
            <p className="section-sub">Experience the difference of working with professionals who care.</p>
          </div>
          <div className={styles.trustGrid}>
            {trustCards.map((c, i) => (
              <div key={c.key1} className={`${styles.trustCard} card`}>
                <div className={styles.trustIcon}>{c.icon}</div>
                <h3>{t(c.key1)}</h3>
                <p>{t(c.key2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA STRIP ══ */}
      <section className={styles.ctaStrip}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <h2>Ready to get started?</h2>
            <p>Visit us or call now — we're here to help you navigate your needs.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link to="/services" className="btn-primary">
              View All Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

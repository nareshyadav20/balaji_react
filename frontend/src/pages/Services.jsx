import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Services.module.css'

const SERVICES = [
  {
    id: 'internet',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 -12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C14.501 4.738 15.922 8.245 16 12C15.922 15.755 14.501 19.262 12 22C9.499 19.262 8.078 15.755 8 12C8.078 8.245 9.499 4.738 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'Internet & MeeSeva Services',
    descKey: 'One-stop solution for government services, internet access, and digital applications.',
    items: ['Birth Certificate','Death Certificate','Caste Certificate','Income Certificate',
      'Residence Certificate','Adangal (Land Records)','Utility Bill Payments',
      'Online Job Applications','Scanning & Printing','Exam Results & Hall Tickets',
      'Passport Application Support','PAN Card Application Support'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'realestate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'Real Estate & Construction',
    descKey: 'Complete support for property-related services and construction activities.',
    items: ['Property Buying Support','Property Selling Support','Rental Assistance',
      'House/Shop Leasing Support','Construction Coordination','Plot Verification',
      'Legal Documentation Support','Registration Guidance','Property Consultation','Site Visit Coordination'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'business',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'Business Consultancy',
    descKey: 'Professional support for personal, local, and business-related services.',
    items: ['Business Registration','Shop Registration','GST Registration Guidance',
      'Documentation & Approvals','Service Coordination','Government Application Support',
      'Local Business Setup Guidance','Follow-ups & Assistance','Office Documentation Help'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'financial',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 5H9.5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5C5 10.6935 5.47411 11.8381 6.31802 12.682C7.16193 13.5259 8.30653 14 9.5 14H14.5C15.6935 14 16.8381 14.4741 17.682 15.318C18.5259 16.1619 19 17.3065 19 18.5C19 19.6935 18.5259 20.8381 17.682 21.682C16.8381 22.5259 15.6935 23 14.5 23H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: 'Financial & Tax Support',
    descKey: 'Support for financial planning and tax-related services for individuals and businesses.',
    items: ['PAN Card Services','Income Tax Return (ITR Filing)','Investment Documentation',
      'Basic Financial Planning','Tax Filing Support','Financial Consultation',
      'Small Business Tax Guidance','Account Documentation Support'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80'
  },
]

export default function Services() {
  const { t } = useLang()
  const [searchParams] = useSearchParams()
  const initialTab = searchParams.get('tab') || 'internet'
  const [active, setActive] = useState(initialTab)

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab) setActive(tab)
  }, [searchParams])

  const current = SERVICES.find(s => s.id === active)

  return (
    <main className="page-enter">
      {/* PAGE HERO */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.pageHeroInner}>
          <span className="section-label" style={{color: '#fff', background: 'rgba(255,255,255,0.2)'}}>{t('services_label')}</span>
          <h1 className="section-title" style={{color: '#fff'}}>{t('services_title')}</h1>
          <p className="section-sub" style={{color: '#e0e0e0'}}>{t('services_sub')}</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection}>
        <div className={`section-wrap ${styles.contentWrap}`}>
          
          {/* Left Area: Tabs & Panel */}
          <div className={styles.leftCol}>
            {/* Tab Grid */}
            <div className={styles.tabGrid}>
              {SERVICES.map(s => (
                <button
                  key={s.id}
                  className={`${styles.tab} ${active === s.id ? styles.tabActive : ''}`}
                  onClick={() => setActive(s.id)}
                >
                  <span className={styles.tabIcon}>{s.icon}</span>
                  <span>{t(s.titleKey)}</span>
                </button>
              ))}
            </div>

            {/* Panel */}
            {current && (
              <div className={`${styles.panel} card`} key={current.id}>
                <div className={styles.panelHeader}>
                  <div className={styles.panelIconWrap}>{current.icon}</div>
                  <div>
                    <h2>{t(current.titleKey)}</h2>
                    <p>{t(current.descKey)}</p>
                  </div>
                </div>
                <div className={styles.itemGrid}>
                  {current.items.map(item => (
                    <div key={item} className={styles.item}>
                      <span className={styles.check}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Area: Dynamic Image */}
          <div className={styles.rightCol}>
            {current && (
              <div className={styles.imageWrapper} key={`img-${current.id}`}>
                <img 
                  src={current.image} 
                  alt={t(current.titleKey)} 
                  className={styles.dynamicImage}
                />
                <div className={styles.imageOverlay}>
                  <h3>{t(current.titleKey)}</h3>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}

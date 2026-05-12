import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Services.module.css'

const SERVICES = [
  {
    id: 'internet',
    icon: '🌐',
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
    icon: '🏠',
    titleKey: 'Real Estate & Construction',
    descKey: 'Complete support for property-related services and construction activities.',
    items: ['Property Buying Support','Property Selling Support','Rental Assistance',
      'House/Shop Leasing Support','Construction Coordination','Plot Verification',
      'Legal Documentation Support','Registration Guidance','Property Consultation','Site Visit Coordination'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'business',
    icon: '💼',
    titleKey: 'Business Consultancy',
    descKey: 'Professional support for personal, local, and business-related services.',
    items: ['Business Registration','Shop Registration','GST Registration Guidance',
      'Documentation & Approvals','Service Coordination','Government Application Support',
      'Local Business Setup Guidance','Follow-ups & Assistance','Office Documentation Help'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'financial',
    icon: '💰',
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

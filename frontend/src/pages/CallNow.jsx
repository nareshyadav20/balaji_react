import { useLang } from '../context/LangContext'
import { Link } from 'react-router-dom'
import styles from './CallNow.module.css'

const SERVICES_QUICK = [
  '🌐 Internet & MeeSeva',
  '🏠 Real Estate & Construction',
  '💼 Business Consultancy',
  '💰 Financial & Tax Support',
]

export default function CallNow() {
  const { t } = useLang()
  return (
    <main className={`page-enter ${styles.page}`}>
      <div className={styles.container}>
        {/* Glow circle */}
        <div className={styles.glow} />

        <div className={styles.badge}>📞 Direct Line</div>

        <h1 className={styles.title}>
          Call Us <span className="grad">Right Now</span>
        </h1>
        <p className={styles.sub}>
          Get instant help for any of our services. We pick up every call personally.
        </p>

        {/* Big phone card */}
        <a href="tel:9848651632" className={styles.phoneCard}>
          <div className={styles.phoneRing}>
            <div className={styles.phoneRing2}>
              <div className={styles.phoneIcon}>📞</div>
            </div>
          </div>
          <div className={styles.phoneNumber}>9848651632</div>
          <div className={styles.phoneTap}>Tap to call now →</div>
        </a>

        {/* Info pills */}
        <div className={styles.pills}>
          <div className={styles.pill}>🕐 Mon–Sat, 9AM–7PM</div>
          <div className={styles.pill}>📍 Kaverammapeta Chourasta, Jadcherla, Mahabubnagar Dist – 509301, Telangana</div>
          <div className={styles.pill}>⚡ Instant Response</div>
        </div>

        {/* Services available */}
        <div className={styles.servicesBox}>
          <h3>We help with:</h3>
          <div className={styles.servicesList}>
            {SERVICES_QUICK.map(s => (
              <div key={s} className={styles.serviceChip}>{t(s)}</div>
            ))}
          </div>
        </div>

        <div className={styles.backLinks}>
          <Link to="/contact" className="btn-outline">📋 Contact Details</Link>
          <Link to="/services" className="btn-outline">🗂️ All Services</Link>
        </div>
      </div>
    </main>
  )
}

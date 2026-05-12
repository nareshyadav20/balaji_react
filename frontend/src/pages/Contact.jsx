import { useLang } from '../context/LangContext'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()
  
  return (
    <main className="page-enter">
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <span className="section-label">{t('contact_label')}</span>
          <h1 className="section-title">{t('contact_title')}</h1>
          <p className="section-sub">{t('contact_desc')}</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="section-wrap">
          <div className={styles.grid}>
            
            {/* LEFT SIDE - CONTACT INFO CARDS */}
            <div className={styles.infoCol}>
              <div className={styles.contactCards}>
                
                {/* Card 1: Call Us */}
                <a href="tel:9848651632" className={styles.contactCard}>
                  <div className={styles.cIcon}>📞</div>
                  <div className={styles.cardContent}>
                    <strong className={styles.cardTitle}>{t('contact_call_title', 'Call Us')}</strong>
                    <span className={styles.cardText}>{t('contact_call_text', 'Speak directly with Owner Potti Srinivasulu')}</span>
                    <span className={styles.cardDetail}>9848651632</span>
                  </div>
                </a>

                {/* Card 2: Email Us */}
                <a href="mailto:pottisrinivasulu113@gmail.com" className={styles.contactCard}>
                  <div className={styles.cIcon}>✉️</div>
                  <div className={styles.cardContent}>
                    <strong className={styles.cardTitle}>{t('contact_email_title', 'Email Us')}</strong>
                    <span className={styles.cardText}>{t('contact_email_text', 'Send your documents or queries')}</span>
                    <span className={styles.cardDetail}>pottisrinivasulu113@gmail.com</span>
                  </div>
                </a>

                {/* Card 3: Visit Us */}
                <div className={styles.contactCard}>
                  <div className={styles.cIcon}>📍</div>
                  <div className={styles.cardContent}>
                    <strong className={styles.cardTitle}>{t('contact_visit_title', 'Visit Us')}</strong>
                    <span className={styles.cardText}>
                      Balaji Communication and Services<br />
                      Kaverammapeta Chourasta, Jadcherla,<br />
                      Mahabubnagar Dist – 509301, Telangana
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className={styles.formCol}>
              <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>📝 {t('contact_form_title', 'Send us a Message')}</h2>
                
                <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_fname', 'First Name')}</label>
                    <input type="text" placeholder={t('contact_form_fname_ph', 'Enter your first name')} />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_email', 'Email Address')}</label>
                    <input type="email" placeholder={t('contact_form_email_ph', 'Enter your email address')} />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_subject', 'Subject')}</label>
                    <input type="text" placeholder={t('contact_form_subject_ph', 'Enter subject')} />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_msg', 'Message')}</label>
                    <textarea 
                      rows="5" 
                      placeholder={t('contact_form_msg_ph', 'Write your message here')}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitBtn}>
                    {t('contact_form_submit', 'Send Message')}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

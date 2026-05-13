import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  // Carousel logic
  const [currentImg, setCurrentImg] = useState(0)
  const contactImages = ['/contact-1.png', '/contact-2.png', '/hero-1.png']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % contactImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [contactImages.length])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' })
        setFormData({ firstName: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' })
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus({ type: 'error', message: 'Failed to connect to server. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }
  
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
            
            {/* LEFT SIDE - CONTACT INFO CARDS & CAROUSEL */}
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

                {/* Contact Carousel */}
                <div className={styles.contactCarousel}>
                  {contactImages.map((img, idx) => (
                    <img 
                      key={img} 
                      src={img} 
                      alt={`Slide ${idx}`} 
                      className={`${styles.carouselImg} ${currentImg === idx ? styles.active : ''}`}
                    />
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className={styles.formCol}>
              <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>📝 {t('contact_form_title', 'Send us a Message')}</h2>
                
                {status.message && (
                  <div className={`${styles.statusMsg} ${status.type === 'success' ? styles.success : styles.error}`}>
                    {status.message}
                  </div>
                )}

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_fname', 'First Name')}</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t('contact_form_fname_ph', 'Enter your first name')} 
                      required
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_email', 'Email Address')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact_form_email_ph', 'Enter your email address')} 
                      required
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_subject', 'Subject')}</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact_form_subject_ph', 'Enter subject')} 
                      required
                    />
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label>{t('contact_form_msg', 'Message')}</label>
                    <textarea 
                      rows="5" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact_form_msg_ph', 'Write your message here')}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? 'Sending...' : t('contact_form_submit', 'Send Message')}
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

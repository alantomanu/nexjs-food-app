import classes from './page.module.css'
import ImagePicker from '@/assets/components/meals/image-picker'

export default function ShareMealsPage(){
  return(
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
      </header>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <div className={classes.inputGroup}>
            <label htmlFor="name" className={classes.label}>Your Name:</label>
            <input type="text" id="name" className={`${classes.input} ${classes.inputField}`} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="email" className={classes.label}>Your Email:</label>
            <input type="email" id="email" className={`${classes.input} ${classes.inputField}`} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="title" className={classes.label}>Title:</label>
            <input type="text" id="title" className={`${classes.input} ${classes.inputField}`} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="summary" className={classes.label}>Short Summary:</label>
            <textarea id="summary" className={`${classes.textarea} ${classes.textareaField}`} required></textarea>
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="instructions" className={classes.label}>Instructions:</label>
            <textarea id="instructions" className={`${classes.textarea} ${classes.textareaField}`} required></textarea>
          </div>
          <ImagePicker className={classes.imagePicker} />
          <button type="submit" className={`${classes.button} ${classes.submitButton}`}>Share Meal</button>
        </form>
      </div>
      <footer className={classes.footer}>
        <p className={classes.footerText}>Thank you for sharing your meal!</p>
      </footer>
    </div>
  )
}
import classes from './page.module.css'
import ImagePicker from '@/assets/components/meals/image-picker'

export default function ShareMealsPage(){
  // Mock function to simulate saving to a database
  async function saveMealToDatabase(meal: any) {
    // Here you would implement your actual database saving logic
    console.log("Meal saved to database:", meal);
    // Example: await database.save(meal);
  }

  async function shareMeal(formData:any) {
    'use server';
    const meal = {
      title: formData.get('title'),
      image: formData.get('image'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }
    console.log(meal);

    // Remove the call to saveMealToDatabase
    // await saveMealToDatabase(meal);
  }

  return(
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
      </header>
      <div className={classes.formContainer}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.inputGroup}>
            <label htmlFor="name" className={classes.label}>Your Name:</label>
            <input type="text" id="name" name="name" className={`${classes.input} ${classes.inputField}`} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="email" className={classes.label}>Your Email:</label>
            <input type="email" id="email" name="email" className={`${classes.input} ${classes.inputField}`} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="title" className={classes.label}>Title:</label>
            <input type="text" id="title" name="title" className={`${classes.input} ${classes.inputField}`} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="summary" className={classes.label}>Short Summary:</label>
            <textarea id="summary" name="summary" className={`${classes.textarea} ${classes.textareaField}`} required></textarea>
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="instructions" className={classes.label}>Instructions:</label>
            <textarea id="instructions" name="instructions" className={`${classes.textarea} ${classes.textareaField}`} required></textarea>
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
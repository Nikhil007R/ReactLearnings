import styles from './Contact.module.css'

function Contact(props){

    return (
        <>
            <div className={`${styles.contactContainer}`}>
                 {props.children}
            </div>
        </>
    )
}

export default Contact;
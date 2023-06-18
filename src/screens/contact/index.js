import Page from '../base'

import ContactComponent from '../../components/contact/contact-component';

function ContactPage() {
    return(
        <Page banner={false}>
            <ContactComponent/>
        </Page>
    )
}

export default ContactPage;
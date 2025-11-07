import ContactWrapper from "@/components/wrapper/contact";
import contactData from "@/lib/data/contact/data.json"

export default function Contact() {
    return(
        <>
            <ContactWrapper data={contactData} />
        </>
    )
}

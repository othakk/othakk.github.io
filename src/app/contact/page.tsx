import { constructMetadata } from "@/lib/site-config";
import ContactForm from "../../components/contact/ContactForm";

export const metadata = constructMetadata({
  title: "Contact | Om Thakkar",
  description: "Get in touch with Om Thakkar.",
});

export default function ContactPage() {
  return <ContactForm />;
}

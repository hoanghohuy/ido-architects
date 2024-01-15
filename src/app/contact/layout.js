import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function ContactLayout({ children }) {
  return (
    <section>
        <Header currentLink={'/contact'} />
      {children}
      <Footer />
      </section>
  )
}
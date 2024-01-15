import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function ProjectLayout({ children }) {
  return (
    <section>
        <Header currentLink={'/project-completed'} />
      {children}
      <Footer />
      </section>
  )
}
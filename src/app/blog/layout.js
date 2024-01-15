import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function BlogLayout({ children }) {
  return (
    <section>
        <Header currentLink={'/blog'} />
      {children}
      <Footer />
      </section>
  )
}
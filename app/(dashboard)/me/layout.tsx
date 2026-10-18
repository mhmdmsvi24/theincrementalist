import "@/app/globals.css"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}

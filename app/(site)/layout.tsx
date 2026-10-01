import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SideRayReloaded from "@/components/SideRayReloaded"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SideRayReloaded />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

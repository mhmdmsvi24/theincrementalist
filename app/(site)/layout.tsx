import { SiteShell } from "@/components/layout/site-shell"
import SideRayReloaded from "@/components/reactbits/SideRayReloaded"
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteShell>
        <SideRayReloaded />
        {children}
      </SiteShell>
    </>
  )
}

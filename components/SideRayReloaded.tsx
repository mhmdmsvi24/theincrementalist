"use client";

import SideRays from "@/components/SideRays"
import { useTheme } from "next-themes"

export default function SideRayReloaded() {
  const { theme } = useTheme()
  return (
    <div className="absolute inset-0 -z-10">
      {theme === "dark" ? (
        <SideRays
          speed={1}
          rayColor1="#b8bec9"
          rayColor2="#596aa8"
          intensity={1.5}
          spread={3}
          origin="top-right"
          tilt={60}
          saturation={2}
          blend={0.14}
          falloff={1.3}
          opacity={1}
        />
      ) : (
        <SideRays
          speed={1}
          rayColor1="#a16207"
          rayColor2="#1d4ed8"
          intensity={1.5}
          spread={3}
          origin="top-right"
          tilt={60}
          saturation={2}
          blend={0.14}
          falloff={1.3}
          opacity={1}
        />
      )}
    </div>
  )
}
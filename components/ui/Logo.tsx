import logo from "@/components/assets/logo-light.png"
import Image from "next/image"

export default function Logo() {
  return (
    <div className="max-h-12 max-w-12 rounded-full bg-white">
      <Image src={logo} alt="incrementalist logo" />
    </div>
  )
}

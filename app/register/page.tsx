import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-2xl font-semibold">Register</h1>
        <RegisterForm />
      </div>
    </main>
  )
}

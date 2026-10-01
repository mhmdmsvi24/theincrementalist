import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>
        <LoginForm />
      </div>
    </main>
  )
}

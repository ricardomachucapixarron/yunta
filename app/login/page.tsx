"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User, Building2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - in real app, validate credentials
    if (email.includes("@")) {
      // Redirect based on email domain or user type
      if (email.includes("pyme") || email.includes("empresa") || email.includes("gerente")) {
        router.push("/dashboard/pyme")
      } else {
        router.push("/dashboard/student")
      }
    }
  }

  const handleQuickLogin = (type: "student" | "pyme") => {
    if (type === "student") {
      setEmail("estudiante@uc.cl")
      setPassword("demo123")
      setTimeout(() => router.push("/dashboard/student"), 500)
    } else {
      setEmail("gerente@mipyme.cl")
      setPassword("demo123")
      setTimeout(() => router.push("/dashboard/pyme"), 500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
            <CardDescription>Accede a tu cuenta de Yunta</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Quick Login Buttons */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-3 block">Acceso rápido de prueba:</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleQuickLogin("student")}
                  className="flex flex-col items-center p-4 h-auto border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                >
                  <User className="h-5 w-5 mb-1 text-blue-600" />
                  <span className="text-sm">Estudiante</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleQuickLogin("pyme")}
                  className="flex flex-col items-center p-4 h-auto border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                >
                  <Building2 className="h-5 w-5 mb-1 text-orange-600" />
                  <span className="text-sm">PYME</span>
                </Button>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">O inicia sesión manual</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Iniciar Sesión
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿No tienes cuenta?{" "}
                  <Link href="/register" className="text-blue-600 hover:underline">
                    Regístrate aquí
                  </Link>
                </p>
              </div>

              {/* Demo credentials info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Credenciales de prueba:</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>
                    <strong>Estudiante:</strong> estudiante@uc.cl
                  </p>
                  <p>
                    <strong>PYME:</strong> gerente@mipyme.cl
                  </p>
                  <p>
                    <strong>Contraseña:</strong> demo123
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

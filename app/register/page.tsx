"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Building2, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [userType, setUserType] = useState<"student" | "pyme">("student")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    university: "",
    career: "",
    year: "",
    company: "",
    industry: "",
    size: "",
    description: "",
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration
    if (userType === "student") {
      router.push("/dashboard/student")
    } else {
      router.push("/dashboard/pyme")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Crear Cuenta</CardTitle>
            <CardDescription>Únete a la comunidad Yunta</CardDescription>
          </CardHeader>
          <CardContent>
            {/* User Type Selection */}
            <div className="mb-6">
              <Label className="text-base font-medium">¿Qué tipo de cuenta necesitas?</Label>
              <RadioGroup
                value={userType}
                onValueChange={(value) => setUserType(value as "student" | "pyme")}
                className="grid grid-cols-2 gap-4 mt-3"
              >
                <div>
                  <RadioGroupItem value="student" id="student" className="peer sr-only" />
                  <Label
                    htmlFor="student"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600 cursor-pointer"
                  >
                    <GraduationCap className="mb-3 h-6 w-6" />
                    <div className="text-center">
                      <div className="font-medium">Estudiante</div>
                      <div className="text-sm text-muted-foreground">Último año de carrera</div>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="pyme" id="pyme" className="peer sr-only" />
                  <Label
                    htmlFor="pyme"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600 cursor-pointer"
                  >
                    <Building2 className="mb-3 h-6 w-6" />
                    <div className="text-center">
                      <div className="font-medium">PYME</div>
                      <div className="text-sm text-muted-foreground">Empresa chilena</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Common Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              {/* Student-specific fields */}
              {userType === "student" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="university">Universidad</Label>
                      <Input
                        id="university"
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        placeholder="ej. Universidad Católica"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="year">Año de carrera</Label>
                      <Input
                        id="year"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        placeholder="ej. 5to año"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="career">Carrera</Label>
                    <Input
                      id="career"
                      value={formData.career}
                      onChange={(e) => setFormData({ ...formData, career: e.target.value })}
                      placeholder="ej. Ingeniería Comercial"
                      required
                    />
                  </div>
                </>
              )}

              {/* PYME-specific fields */}
              {userType === "pyme" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Nombre de la empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industria</Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="ej. Retail, Manufactura"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="size">Tamaño de la empresa</Label>
                    <Input
                      id="size"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      placeholder="ej. 10-50 empleados"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Descripción del negocio</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Cuéntanos sobre tu empresa y principales desafíos..."
                      required
                    />
                  </div>
                </>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Crear Cuenta
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿Ya tienes cuenta?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

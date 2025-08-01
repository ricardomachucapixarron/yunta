"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building2,
  Calendar,
  Clock,
  DollarSign,
  Filter,
  MapPin,
  Search,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Optimización de Procesos de Inventario",
      company: "Ferretería San Miguel",
      location: "San Miguel, Santiago",
      budget: "$1.500.000",
      duration: "4 meses",
      area: "Operaciones",
      description:
        "Análisis completo del sistema de inventarios actual, identificación de ineficiencias y propuesta de mejoras para optimizar la gestión de stock y reducir costos operativos.",
      requirements: ["Excel Avanzado", "Lean Manufacturing", "Análisis de Procesos"],
      posted: "Hace 2 días",
      applications: 12,
      match: 95,
      company_size: "15-30 empleados",
      industry: "Retail",
      urgency: "Alta",
    },
    {
      id: 2,
      title: "Estrategia de Marketing Digital Integral",
      company: "Panadería Artesanal Luna",
      location: "Providencia, Santiago",
      budget: "$1.200.000",
      duration: "3 meses",
      area: "Marketing",
      description:
        "Desarrollo de estrategia digital completa incluyendo presencia en redes sociales, marketing de contenidos y análisis de métricas para aumentar ventas online.",
      requirements: ["Marketing Digital", "Redes Sociales", "Google Analytics", "Photoshop"],
      posted: "Hace 1 semana",
      applications: 8,
      match: 88,
      company_size: "5-10 empleados",
      industry: "Alimentación",
      urgency: "Media",
    },
    {
      id: 3,
      title: "Sistema de Control Financiero",
      company: "Taller Mecánico Rodríguez",
      location: "Maipú, Santiago",
      budget: "$1.800.000",
      duration: "5 meses",
      area: "Finanzas",
      description:
        "Implementación de sistema de control financiero, análisis de flujos de caja, proyecciones financieras y herramientas de seguimiento de rentabilidad.",
      requirements: ["Finanzas Corporativas", "Excel", "Power BI", "Análisis Financiero"],
      posted: "Hace 3 días",
      applications: 15,
      match: 82,
      company_size: "10-20 empleados",
      industry: "Automotriz",
      urgency: "Alta",
    },
    {
      id: 4,
      title: "Mejora de Procesos de RRHH",
      company: "Clínica Dental Sonrisa",
      location: "Las Condes, Santiago",
      budget: "$1.400.000",
      duration: "4 meses",
      area: "RRHH",
      description:
        "Optimización de procesos de recursos humanos, implementación de sistema de evaluación de desempeño y mejora del clima laboral.",
      requirements: ["Gestión de RRHH", "Psicología Organizacional", "Excel"],
      posted: "Hace 5 días",
      applications: 6,
      match: 76,
      company_size: "8-15 empleados",
      industry: "Salud",
      urgency: "Baja",
    },
    {
      id: 5,
      title: "Análisis de Mercado y Competencia",
      company: "Tienda de Ropa Urbana",
      location: "Ñuñoa, Santiago",
      budget: "$1.300.000",
      duration: "3 meses",
      area: "Marketing",
      description:
        "Estudio de mercado completo, análisis de competencia, identificación de oportunidades y propuesta de estrategia de posicionamiento.",
      requirements: ["Investigación de Mercados", "Análisis Estadístico", "SPSS", "PowerPoint"],
      posted: "Hace 1 semana",
      applications: 10,
      match: 79,
      company_size: "3-8 empleados",
      industry: "Retail",
      urgency: "Media",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArea = selectedArea === "all" || project.area === selectedArea
    const matchesBudget =
      selectedBudget === "all" ||
      (selectedBudget === "low" && Number.parseInt(project.budget.replace(/[^\d]/g, "")) < 1400000) ||
      (selectedBudget === "medium" &&
        Number.parseInt(project.budget.replace(/[^\d]/g, "")) >= 1400000 &&
        Number.parseInt(project.budget.replace(/[^\d]/g, "")) <= 1600000) ||
      (selectedBudget === "high" && Number.parseInt(project.budget.replace(/[^\d]/g, "")) > 1600000)
    const matchesLocation = selectedLocation === "all" || project.location.includes(selectedLocation)

    return matchesSearch && matchesArea && matchesBudget && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Yunta</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard/student" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                <Link href="/jobs" className="text-blue-600 font-medium">
                  Proyectos
                </Link>
                <Link href="/chat" className="text-gray-600 hover:text-gray-900">
                  Mensajes
                </Link>
                <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                  Perfil
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Proyectos de Consultoría</h1>
          <p className="text-gray-600">Encuentra proyectos reales de PYMEs chilenas para tu trabajo de título</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar proyectos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Área</label>
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las áreas</SelectItem>
                      <SelectItem value="Finanzas">Finanzas</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Operaciones">Operaciones</SelectItem>
                      <SelectItem value="RRHH">Recursos Humanos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Presupuesto</label>
                  <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rango de presupuesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los rangos</SelectItem>
                      <SelectItem value="low">Hasta $1.400.000</SelectItem>
                      <SelectItem value="medium">$1.400.000 - $1.600.000</SelectItem>
                      <SelectItem value="high">Más de $1.600.000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Ubicación</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Comuna" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las comunas</SelectItem>
                      <SelectItem value="Santiago">Santiago Centro</SelectItem>
                      <SelectItem value="Providencia">Providencia</SelectItem>
                      <SelectItem value="Las Condes">Las Condes</SelectItem>
                      <SelectItem value="Maipú">Maipú</SelectItem>
                      <SelectItem value="San Miguel">San Miguel</SelectItem>
                      <SelectItem value="Ñuñoa">Ñuñoa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedArea("all")
                    setSelectedBudget("all")
                    setSelectedLocation("all")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </CardContent>
            </Card>

            {/* Market Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Estadísticas del Mercado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Proyectos activos:</span>
                    <span className="font-medium">84</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Presupuesto promedio:</span>
                    <span className="font-medium text-green-600">$1.480.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duración promedio:</span>
                    <span className="font-medium">3.8 meses</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tasa de éxito:</span>
                    <span className="font-medium text-orange-600">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">
                  Mostrando {filteredProjects.length} de {projects.length} proyectos
                </p>
              </div>
              <Select defaultValue="match">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">Mejor match</SelectItem>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="budget-high">Mayor presupuesto</SelectItem>
                  <SelectItem value="budget-low">Menor presupuesto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                          <Badge className="bg-orange-100 text-orange-800">{project.match}% match</Badge>
                          <Badge
                            variant={
                              project.urgency === "Alta"
                                ? "destructive"
                                : project.urgency === "Media"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {project.urgency} prioridad
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <Building2 className="mr-1 h-4 w-4" />
                          {project.company}
                          <MapPin className="ml-3 mr-1 h-4 w-4" />
                          {project.location}
                          <Users className="ml-3 mr-1 h-4 w-4" />
                          {project.company_size}
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.requirements.map((req) => (
                            <Badge key={req} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <DollarSign className="mr-1 h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-600">{project.budget}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-gray-500" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4 text-blue-600" />
                        <span className="text-blue-600">{project.area}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-gray-500" />
                        <span>{project.applications} postulaciones</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        Publicado {project.posted}
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          Ver Detalles
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Postular Ahora
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron proyectos</h3>
                  <p className="text-gray-600 mb-4">Intenta ajustar tus filtros o términos de búsqueda</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedArea("all")
                      setSelectedBudget("all")
                      setSelectedLocation("all")
                    }}
                  >
                    Limpiar Filtros
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

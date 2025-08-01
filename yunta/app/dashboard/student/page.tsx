"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Award,
  Target,
  BarChart3,
  Building2,
  User,
} from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const recommendedProjects = [
    {
      id: 1,
      title: "Optimización de Procesos Operativos",
      company: "Ferretería San Miguel",
      location: "San Miguel, Santiago",
      budget: "$1.500.000",
      duration: "4 meses",
      area: "Operaciones",
      match: 95,
      description: "Análisis y mejora de procesos de inventario y atención al cliente",
      skills: ["Lean Manufacturing", "Análisis de Procesos", "Excel Avanzado"],
      posted: "Hace 2 días",
    },
    {
      id: 2,
      title: "Estrategia de Marketing Digital",
      company: "Panadería Artesanal Luna",
      location: "Providencia, Santiago",
      budget: "$1.200.000",
      duration: "3 meses",
      area: "Marketing",
      match: 88,
      description: "Desarrollo de estrategia digital y presencia en redes sociales",
      skills: ["Marketing Digital", "Redes Sociales", "Google Analytics"],
      posted: "Hace 1 semana",
    },
    {
      id: 3,
      title: "Control Financiero y Presupuestos",
      company: "Taller Mecánico Rodríguez",
      location: "Maipú, Santiago",
      budget: "$1.800.000",
      duration: "5 meses",
      area: "Finanzas",
      match: 82,
      description: "Implementación de sistema de control financiero y proyecciones",
      skills: ["Finanzas", "Excel", "Análisis Financiero"],
      posted: "Hace 3 días",
    },
  ]

  const currentProjects = [
    {
      id: 1,
      title: "Sistema de Gestión de Inventarios",
      company: "Distribuidora Central",
      progress: 65,
      phase: "Análisis",
      nextMilestone: "Presentación de propuesta",
      dueDate: "15 Mar 2024",
      budget: "$1.600.000",
    },
  ]

  const achievements = [
    { name: "Primer Proyecto", description: "Completaste tu primer proyecto", earned: true },
    { name: "Satisfacción 5★", description: "Obtuviste calificación perfecta", earned: true },
    { name: "Especialista", description: "3 proyectos en la misma área", earned: false },
    { name: "Mentor", description: "Ayudaste a otro estudiante", earned: false },
  ]

  const marketInsights = [
    { area: "Finanzas", demand: "Alta", avgBudget: "$1.650.000", projects: 23 },
    { area: "Marketing", demand: "Media", avgBudget: "$1.400.000", projects: 18 },
    { area: "Operaciones", demand: "Alta", avgBudget: "$1.550.000", projects: 31 },
    { area: "RRHH", demand: "Baja", avgBudget: "$1.300.000", projects: 12 },
  ]

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
                <Link href="/dashboard/student" className="text-blue-600 font-medium">
                  Dashboard
                </Link>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900">
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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">¡Hola Juan! 👋</h1>
          <p className="text-gray-600">Aquí tienes tus proyectos y oportunidades recomendadas</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Proyectos Actuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentProjects.length > 0 ? (
                  <div className="space-y-4">
                    {currentProjects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.company}</p>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800">{project.phase}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progreso</span>
                            <span className="text-orange-600 font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                          <span>Próximo hito: {project.nextMilestone}</span>
                          <span>{project.dueDate}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm font-medium text-green-600">{project.budget}</span>
                          <Button size="sm">Ver Detalles</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes proyectos activos</h3>
                    <p className="text-gray-600 mb-4">Explora los proyectos recomendados para ti</p>
                    <Button>Buscar Proyectos</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recommended Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Proyectos Recomendados
                </CardTitle>
                <CardDescription>Basado en tu perfil y especialización</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recommendedProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <Badge className="bg-orange-100 text-orange-800">{project.match}% match</Badge>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm mb-2">
                            <Building2 className="mr-1 h-4 w-4" />
                            {project.company}
                            <MapPin className="ml-3 mr-1 h-4 w-4" />
                            {project.location}
                          </div>
                          <p className="text-gray-700 mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <DollarSign className="mr-1 h-4 w-4 text-green-600" />
                            <span className="font-medium text-green-600">{project.budget}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {project.duration}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {project.posted}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Ver Más
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Postular
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Progreso del Perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Completitud</span>
                    <span className="text-orange-600 font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Información básica
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Experiencia académica
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-orange-500" />
                      Portfolio de proyectos
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-400" />
                      Certificaciones
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Completar Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Logros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.earned ? "bg-orange-100" : "bg-gray-100"
                        }`}
                      >
                        <Award className={`h-4 w-4 ${achievement.earned ? "text-orange-600" : "text-gray-400"}`} />
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-medium ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}
                        >
                          {achievement.name}
                        </div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Insights del Mercado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketInsights.map((insight, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-sm">{insight.area}</div>
                        <div className="text-xs text-gray-500">{insight.projects} proyectos</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">{insight.avgBudget}</div>
                        <Badge
                          variant={
                            insight.demand === "Alta" ? "default" : insight.demand === "Media" ? "secondary" : "outline"
                          }
                          className="text-xs"
                        >
                          {insight.demand}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

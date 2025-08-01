"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare,
  Plus,
  Star,
  TrendingUp,
  Users,
  Eye,
  UserCheck,
  BarChart3,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function PymeDashboard() {
  const activeProjects = [
    {
      id: 1,
      title: "Optimización de Procesos de Inventario",
      student: "María González",
      university: "UC",
      progress: 75,
      phase: "Implementación",
      budget: "$1.500.000",
      startDate: "15 Ene 2024",
      nextMilestone: "Entrega final",
      dueDate: "15 Mar 2024",
      area: "Operaciones",
    },
    {
      id: 2,
      title: "Estrategia de Marketing Digital",
      student: "Carlos Pérez",
      university: "UChile",
      progress: 45,
      phase: "Análisis",
      budget: "$1.200.000",
      startDate: "1 Feb 2024",
      nextMilestone: "Presentación propuesta",
      dueDate: "30 Mar 2024",
      area: "Marketing",
    },
  ]

  const topCandidates = [
    {
      id: 1,
      name: "Ana Martínez",
      university: "USACH",
      career: "Ing. Comercial",
      year: "5to año",
      specialization: "Finanzas",
      rating: 4.9,
      projects: 3,
      match: 95,
      skills: ["Excel Avanzado", "Análisis Financiero", "Power BI"],
      available: true,
    },
    {
      id: 2,
      name: "Diego Silva",
      university: "UDP",
      career: "Ing. Industrial",
      year: "5to año",
      specialization: "Operaciones",
      rating: 4.8,
      projects: 2,
      match: 88,
      skills: ["Lean Manufacturing", "Six Sigma", "Python"],
      available: true,
    },
    {
      id: 3,
      name: "Sofía Rojas",
      university: "UDD",
      career: "Ing. Comercial",
      year: "4to año",
      specialization: "Marketing",
      rating: 4.7,
      projects: 1,
      match: 82,
      skills: ["Marketing Digital", "Google Analytics", "Photoshop"],
      available: false,
    },
  ]

  const recentApplications = [
    {
      id: 1,
      project: "Control Financiero Avanzado",
      applicant: "Juan Pérez",
      university: "PUC",
      appliedDate: "Hace 2 días",
      status: "Pendiente",
      match: 92,
    },
    {
      id: 2,
      project: "Optimización de Procesos",
      applicant: "Laura González",
      university: "UChile",
      appliedDate: "Hace 1 semana",
      status: "En revisión",
      match: 87,
    },
    {
      id: 3,
      project: "Estrategia Digital",
      applicant: "Roberto Silva",
      university: "USACH",
      appliedDate: "Hace 3 días",
      status: "Entrevista",
      match: 79,
    },
  ]

  const performanceMetrics = [
    { label: "Proyectos Activos", value: "2", change: "+1", trend: "up" },
    { label: "Satisfacción Promedio", value: "4.8", change: "+0.2", trend: "up" },
    { label: "ROI Promedio", value: "285%", change: "+15%", trend: "up" },
    { label: "Tiempo Promedio", value: "4.2 meses", change: "-0.3", trend: "down" },
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
                <Link href="/dashboard/pyme" className="text-blue-600 font-medium">
                  Dashboard
                </Link>
                <Link href="/projects/manage" className="text-gray-600 hover:text-gray-900">
                  Mis Proyectos
                </Link>
                <Link href="/students" className="text-gray-600 hover:text-gray-900">
                  Estudiantes
                </Link>
                <Link href="/chat" className="text-gray-600 hover:text-gray-900">
                  Mensajes
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Proyecto
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>FM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">¡Hola Ferretería San Miguel! 👋</h1>
          <p className="text-gray-600">Gestiona tus proyectos de consultoría y encuentra el mejor talento</p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`flex items-center text-sm ${
                        metric.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <TrendingUp className={`h-4 w-4 mr-1 ${metric.trend === "down" ? "rotate-180" : ""}`} />
                      {metric.change}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Proyectos Activos
                </CardTitle>
                <CardDescription>Seguimiento de tus proyectos en curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                          <div className="flex items-center text-gray-600 text-sm mb-2">
                            <Users className="mr-1 h-4 w-4" />
                            {project.student} • {project.university}
                            <Badge className="ml-2 bg-orange-100 text-orange-800">{project.area}</Badge>
                          </div>
                        </div>
                        <Badge variant={project.phase === "Implementación" ? "default" : "secondary"}>
                          {project.phase}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progreso del proyecto</span>
                          <span className="text-orange-600 font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Inicio:</span> {project.startDate}
                        </div>
                        <div>
                          <span className="font-medium">Entrega:</span> {project.dueDate}
                        </div>
                        <div>
                          <span className="font-medium">Presupuesto:</span>{" "}
                          <span className="text-green-600 font-medium">{project.budget}</span>
                        </div>
                        <div>
                          <span className="font-medium">Próximo hito:</span> {project.nextMilestone}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-1 h-4 w-4" />
                            Chat
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="mr-1 h-4 w-4" />
                            Reunión
                          </Button>
                        </div>
                        <Button size="sm">Ver Detalles</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="mr-2 h-5 w-5" />
                  Postulaciones Recientes
                </CardTitle>
                <CardDescription>Estudiantes que han postulado a tus proyectos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>
                            {application.applicant
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{application.applicant}</div>
                          <div className="text-sm text-gray-600">
                            {application.project} • {application.university}
                          </div>
                          <div className="text-xs text-gray-500">{application.appliedDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-orange-100 text-orange-800">{application.match}% match</Badge>
                        <Badge
                          variant={
                            application.status === "Pendiente"
                              ? "secondary"
                              : application.status === "En revisión"
                                ? "default"
                                : "outline"
                          }
                        >
                          {application.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Revisar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Candidates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  Mejores Candidatos
                </CardTitle>
                <CardDescription>Estudiantes destacados disponibles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCandidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>
                              {candidate.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">{candidate.name}</div>
                            <div className="text-xs text-gray-600">
                              {candidate.career} • {candidate.university}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-orange-100 text-orange-800 text-xs">{candidate.match}% match</Badge>
                          <div className="flex items-center mt-1">
                            <Star className="h-3 w-3 text-orange-500 fill-current" />
                            <span className="text-xs ml-1">{candidate.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">Especialización:</span> {candidate.specialization}
                        </div>
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">Proyectos:</span> {candidate.projects} completados
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {candidate.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{candidate.skills.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              candidate.available ? "bg-green-500" : "bg-gray-400"
                            }`}
                          />
                          <span className="text-xs text-gray-600">
                            {candidate.available ? "Disponible" : "Ocupado"}
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 bg-transparent">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" className="text-xs px-2 py-1" disabled={!candidate.available}>
                            Contactar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Ver Todos los Candidatos
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Publicar Nuevo Proyecto
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Buscar Estudiantes
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Ver Reportes
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Centro de Mensajes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ROI Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Calculadora ROI
                </CardTitle>
                <CardDescription>Proyección de retorno de inversión</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">285%</div>
                    <div className="text-sm text-gray-600">ROI Promedio</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Inversión promedio:</span>
                      <span className="font-medium">$1.500.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ahorro generado:</span>
                      <span className="font-medium text-green-600">$4.275.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tiempo de recuperación:</span>
                      <span className="font-medium">8 meses</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Calcular para mi proyecto
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Smile, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const [selectedChat, setSelectedChat] = useState(1)

  const conversations = [
    {
      id: 1,
      name: "Carlos Mendoza",
      company: "Ferretería San Miguel",
      role: "Gerente General",
      lastMessage: "¿Cuándo podríamos revisar el avance del proyecto?",
      time: "10:30",
      unread: 2,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40&text=CM",
      type: "pyme",
      project: "Optimización de Inventarios",
    },
    {
      id: 2,
      name: "Ana Martínez",
      company: "Universidad Católica",
      role: "Profesora Guía",
      lastMessage: "Recuerda enviar el informe de avance esta semana",
      time: "Ayer",
      unread: 0,
      online: false,
      avatar: "/placeholder.svg?height=40&width=40&text=AM",
      type: "mentor",
      project: "Optimización de Inventarios",
    },
    {
      id: 3,
      name: "María González",
      company: "Panadería Luna",
      role: "Propietaria",
      lastMessage: "Me gustó mucho tu propuesta inicial",
      time: "Lun",
      unread: 1,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40&text=MG",
      type: "pyme",
      project: "Marketing Digital",
    },
    {
      id: 4,
      name: "Diego Silva",
      company: "Universidad de Chile",
      role: "Estudiante",
      lastMessage: "¿Podrías ayudarme con el análisis financiero?",
      time: "Mar",
      unread: 0,
      online: true,
      avatar: "/placeholder.svg?height=40&width=40&text=DS",
      type: "student",
      project: "Peer Support",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Carlos Mendoza",
      content: "Hola Juan, espero que estés bien. He revisado tu propuesta inicial y me parece muy sólida.",
      time: "10:15",
      isMe: false,
      type: "text",
    },
    {
      id: 2,
      sender: "Yo",
      content: "¡Hola Carlos! Muchas gracias por el feedback. Me alegra que te haya gustado la propuesta.",
      time: "10:18",
      isMe: true,
      type: "text",
    },
    {
      id: 3,
      sender: "Carlos Mendoza",
      content:
        "Perfecto. Me gustaría que nos enfoquemos especialmente en la optimización del área de herramientas. ¿Cuándo podríamos revisar el avance del proyecto?",
      time: "10:30",
      isMe: false,
      type: "text",
    },
    {
      id: 4,
      sender: "Yo",
      content:
        "Claro, podemos agendar una reunión para esta semana. Te envío el calendario con mis horarios disponibles.",
      time: "10:32",
      isMe: true,
      type: "text",
    },
    {
      id: 5,
      sender: "Yo",
      content: "Calendario_Disponibilidad_Marzo.pdf",
      time: "10:32",
      isMe: true,
      type: "file",
    },
  ]

  const currentChat = conversations.find((c) => c.id === selectedChat)

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

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
                <Link href="/jobs" className="text-gray-600 hover:text-gray-900">
                  Proyectos
                </Link>
                <Link href="/chat" className="text-blue-600 font-medium">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Mensajes</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Buscar conversaciones..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation.id)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 border-b transition-colors ${
                        selectedChat === conversation.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {conversation.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-sm truncate">{conversation.name}</p>
                              <div className="flex items-center space-x-2">
                                <p className="text-xs text-gray-500">
                                  {conversation.company} • {conversation.role}
                                </p>
                                <Badge
                                  variant="secondary"
                                  className={`text-xs ${
                                    conversation.type === "pyme"
                                      ? "bg-blue-100 text-blue-800"
                                      : conversation.type === "mentor"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-orange-100 text-orange-800"
                                  }`}
                                >
                                  {conversation.type === "pyme"
                                    ? "PYME"
                                    : conversation.type === "mentor"
                                      ? "Mentor"
                                      : "Estudiante"}
                                </Badge>
                              </div>
                              {conversation.project && (
                                <p className="text-xs text-gray-400 mt-1">Proyecto: {conversation.project}</p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500">{conversation.time}</p>
                              {conversation.unread > 0 && (
                                <Badge className="mt-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={currentChat?.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {currentChat?.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {currentChat?.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{currentChat?.name}</h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500">
                          {currentChat?.company} • {currentChat?.role}
                        </p>
                        {currentChat?.online && <span className="text-orange-500 text-sm">En línea</span>}
                      </div>
                      {currentChat?.project && <p className="text-xs text-gray-400">Proyecto: {currentChat.project}</p>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" title="Llamada de voz">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Videollamada">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Agendar reunión">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Más opciones">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.isMe ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {msg.type === "file" ? (
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4" />
                          <span className="text-sm underline cursor-pointer">{msg.content}</span>
                        </div>
                      ) : (
                        <p className="text-sm">{msg.content}</p>
                      )}
                      <p className={`text-xs mt-1 ${msg.isMe ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" title="Adjuntar archivo">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Escribe tu mensaje..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pr-10"
                    />
                  </div>
                  <Button variant="ghost" size="sm" title="Emojis">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    disabled={!message.trim()}
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

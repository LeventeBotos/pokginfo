'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Dummy data (replace with real data in your implementation)
const cancelledClasses = [
  { id: 1, name: 'Mathematics 101', teacher: 'Dr. Smith', time: '9:00 AM' },
  { id: 2, name: 'History 202', teacher: 'Prof. Johnson', time: '11:00 AM' },
  { id: 3, name: 'Physics 301', teacher: 'Dr. Brown', time: '2:00 PM' },
]

const schoolNews = [
  { id: 1, title: 'Annual Science Fair Next Week', content: 'Prepare your projects for the upcoming science fair on Friday.' },
  { id: 2, title: 'New Library Hours', content: 'The school library will now be open until 7 PM on weekdays.' },
  { id: 3, title: 'Sports Team Tryouts', content: 'Basketball and soccer team tryouts will be held this Wednesday after school.' },
]

export function SchoolInfoDisplayComponent() {
  const [showCancelledClasses, setShowCancelledClasses] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCancelledClasses(prev => !prev)
    }, 10000) // Switch every 10 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">School Information Board</h1>
      </header>
      
      <div className="max-w-4xl mx-auto">
        {showCancelledClasses ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-red-600">Cancelled Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {cancelledClasses.map(cls => (
                  <li key={cls.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">{cls.name}</h3>
                    <p className="text-gray-600">{cls.teacher}</p>
                    <Badge variant="destructive">{cls.time}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">School News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {schoolNews.map(news => (
                  <li key={news.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">{news.title}</h3>
                    <p className="text-gray-600">{news.content}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
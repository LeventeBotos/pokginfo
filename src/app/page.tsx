"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Book,
  Trophy,
  Bell,
  HelpCircle,
  Heart,
  MessageSquare,
} from "lucide-react";
//sd
// Dummy data (replace with real data in your implementation)
const categories = [
  {
    id: "cancelled",
    name: "Cancelled Classes",
    icon: <Calendar className="w-5 h-5" />,
    color: "text-red-600",
    content: [
      { id: 1, title: "Mathematics 101", description: "Dr. Smith - 9:00 AM" },
      { id: 2, title: "History 202", description: "Prof. Johnson - 11:00 AM" },
      { id: 3, title: "Physics 301", description: "Dr. Brown - 2:00 PM" },
    ],
  },
  {
    id: "news",
    name: "School News",
    icon: <Bell className="w-5 h-5" />,
    color: "text-blue-600",
    content: [
      {
        id: 1,
        title: "Annual Science Fair Next Week",
        description:
          "Prepare your projects for the upcoming science fair on Friday.",
      },
      {
        id: 2,
        title: "New Library Hours",
        description:
          "The school library will now be open until 7 PM on weekdays.",
      },
      {
        id: 3,
        title: "Sports Team Tryouts",
        description:
          "Basketball and soccer team tryouts will be held this Wednesday after school.",
      },
    ],
  },
  {
    id: "clubs",
    name: "Clubs & Activities",
    icon: <Trophy className="w-5 h-5" />,
    color: "text-green-600",
    content: [
      {
        id: 1,
        title: "Chess Club Meeting",
        description: "Every Tuesday at 3 PM in Room 201",
      },
      {
        id: 2,
        title: "Drama Club Auditions",
        description: "This Thursday at 4 PM in the Auditorium",
      },
      {
        id: 3,
        title: "Robotics Team",
        description: "New members welcome! Meet on Wednesdays at 3:30 PM",
      },
    ],
  },
  {
    id: "exams",
    name: "Exams & Deadlines",
    icon: <Book className="w-5 h-5" />,
    color: "text-purple-600",
    content: [
      {
        id: 1,
        title: "Midterm Exams",
        description:
          "Starting next Monday. Check the detailed schedule on the school website.",
      },
      {
        id: 2,
        title: "Essay Deadline",
        description: "English Literature essays due this Friday by 11:59 PM",
      },
      {
        id: 3,
        title: "Math Quiz",
        description: "Algebra II pop quiz sometime this week. Be prepared!",
      },
    ],
  },
  {
    id: "lost",
    name: "Lost & Found",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "text-yellow-600",
    content: [
      {
        id: 1,
        title: "Blue Backpack",
        description: "Found near the gym. Claim at the office.",
      },
      {
        id: 2,
        title: "Silver Watch",
        description: "Left in the science lab. See Mr. Johnson.",
      },
      {
        id: 3,
        title: "Textbook: World History",
        description: "Found in the cafeteria. Check lost and found box.",
      },
    ],
  },
  {
    id: "wellness",
    name: "Wellness Corner",
    icon: <Heart className="w-5 h-5" />,
    color: "text-pink-600",
    content: [
      {
        id: 1,
        title: "Mindfulness Session",
        description:
          "Join us for a relaxation session every Monday at lunch in Room 105.",
      },
      {
        id: 2,
        title: "Counselor Available",
        description:
          "Ms. Thompson is available for walk-in sessions every day from 1-3 PM.",
      },
      {
        id: 3,
        title: "Wellness Tip",
        description:
          "Remember to take short breaks during your study sessions to refresh your mind.",
      },
    ],
  },
];

export default function EnhancedSchoolInfoBoard() {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          School Information Board
        </h1>
      </header>

      <div className="max-w-6xl mx-auto">
        <Tabs value={categories[activeCategory].id} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
            {categories.map((category, index) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 ${
                  categories[activeCategory].id === category.id
                    ? categories[activeCategory].color
                    : ""
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle
                    className={`text-2xl font-bold flex items-center space-x-2 ${category.color}`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.content.map((item) => (
                      <li
                        key={item.id}
                        className="bg-white p-4 rounded-lg shadow"
                      >
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Student Poll</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                What&apos;s your favorite school event?
              </p>
              <div className="space-y-2">
                {[
                  "Sports Day",
                  "Science Fair",
                  "Arts Festival",
                  "Career Day",
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option}
                      name="school-event"
                      className="form-radio"
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Submit Vote
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Digital Version
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-lg mb-4">Scan for more information:</p>
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="QR Code"
                className="w-48 h-48"
              />
              <p className="mt-2 text-sm text-gray-600">
                Or visit: school-info.example.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

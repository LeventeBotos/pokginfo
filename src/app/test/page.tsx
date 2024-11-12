/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Book, Trophy, Bell } from "lucide-react";

interface Category {
  id: string;
  type?: string;
  image?: string;
  name: string;
  icon: JSX.Element;
  color?: string;
  dark?: boolean;
  backgroundImage?: string; // Optional background image URL
  content?: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

// Dummy data (replace with real data in your implementation)
const categories: Category[] = [
  {
    id: "helyettesites",
    type: "list",
    name: "Helyettesítés",
    icon: <Calendar className="w-5 h-5" />,
    color: "text-red-600",
    dark: true,
    backgroundImage:
      "https://indieground.net/wp-content/uploads/2023/03/Freebie-GradientTextures-Preview-02.jpg", // Replace with actual paths
    content: [
      { id: 1, title: "Mathematics 101", description: "Dr. Smith - 9:00 AM" },
      { id: 2, title: "History 202", description: "Prof. Johnson - 11:00 AM" },
      { id: 3, title: "Physics 301", description: "Dr. Brown - 2:00 PM" },
    ],
  },
  {
    id: "oktv",
    type: "list",

    name: "OKTV dátumok",
    icon: <Bell className="w-5 h-5" />,
    color: "text-blue-600",
    backgroundImage:
      "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?cs=srgb&dl=pexels-codioful-6985003.jpg&fm=jpg",
    content: [
      {
        id: 1,
        title: "Matek OKTV",
        description: "November 11 - 14:00",
      },
      {
        id: 2,
        title: "Info OKTV",
        description: "November 11 - 14:00",
      },
      {
        id: 3,
        title: "Irodalom OKTV",
        description: "November 11 - 14:00",
      },
    ],
  },
  {
    id: "sitabor",
    type: "image",

    name: "Iskolai sítábor",
    icon: <Bell className="w-5 h-5" />,
    color: "text-blue-600",
    image:
      "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?cs=srgb&dl=pexels-codioful-6985003.jpg&fm=jpg",
  },
  // Additional categories...
];

export default function EnhancedSchoolInfoBoard() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const currentCategory = categories[activeCategory];

  return (
    <div
      className={`h-screen relative transition-all duration-500 ease-in-out ${
        categories[activeCategory].dark ? "text-white" : "text-black"
      }`}
    >
      {/* Navbar with category buttons */}
      <nav
        className={`flex z-50 flex-row w-full justify-center overflow-x-auto gap-2 absolute text-opacity-75  top-5 `}
      >
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(index)}
            className={`flex items-center rounded-lg  backdrop-blur-3xl backdrop-brightness-95 border  cursor-pointer flex-row gap-2 px-2 py-1 ${
              activeCategory === index &&
              (category.dark
                ? "text-white/100 border-white/10"
                : "text-black/100 border-black/10")
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </nav>

      {/* Main Content Area with Background Image */}
      <div
        className={`w-full p-4 pt-20 h-full flex flex-col items-center justify-center  font-bold text-center `}
        style={{
          backgroundImage: `url(${
            currentCategory.backgroundImage || "/default-image.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <h1 className="text-3xl mb-4">{currentCategory.name}</h1> */}
        {currentCategory.type === "image" ? (
          <img
            src={currentCategory.image}
            className="self-center w-full rounded-lg h-full"
          />
        ) : (
          <div className="w-full h-full rounded-lg">
            {/* Content List */}
            <div className="w-full h-full backdrop-blur-3xl p-3 flex flex-col rounded-lg  ">
              <div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  {currentCategory.icon}
                  {currentCategory.name}
                </div>
              </div>

              <ul className="space-y-4 flex flex-col gap-4 ">
                {currentCategory.content &&
                  currentCategory.content.map((item) => (
                    <li
                      key={item.id}
                      className="bg-white p-4 rounded-lg shadow-md"
                    >
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Calendar, Book, Trophy, Bell } from "lucide-react";

// // Dummy data (replace with real data in your implementation)
// const categories = [
//   {
//     id: "helyettesites",
//     name: "Helyettesítés",
//     icon: <Calendar className="w-5 h-5" />,
//     color: "text-red-600",
//     content: [
//       { id: 1, title: "Mathematics 101", description: "Dr. Smith - 9:00 AM" },
//       { id: 2, title: "History 202", description: "Prof. Johnson - 11:00 AM" },
//       { id: 3, title: "Physics 301", description: "Dr. Brown - 2:00 PM" },
//     ],
//   },
//   {
//     id: "news",
//     name: "School News",
//     icon: <Bell className="w-5 h-5" />,
//     color: "text-blue-600",
//     content: [
//       {
//         id: 1,
//         title: "Annual Science Fair Next Week",
//         description:
//           "Prepare your projects for the upcoming science fair on Friday.",
//       },
//       {
//         id: 2,
//         title: "New Library Hours",
//         description:
//           "The school library will now be open until 7 PM on weekdays.",
//       },
//       {
//         id: 3,
//         title: "Sports Team Tryouts",
//         description:
//           "Basketball and soccer team tryouts will be held this Wednesday after school.",
//       },
//     ],
//   },
//   {
//     id: "clubs",
//     name: "Clubs & Activities",
//     icon: <Trophy className="w-5 h-5" />,
//     color: "text-green-600",
//     content: [
//       {
//         id: 1,
//         title: "Chess Club Meeting",
//         description: "Every Tuesday at 3 PM in Room 201",
//       },
//       {
//         id: 2,
//         title: "Drama Club Auditions",
//         description: "This Thursday at 4 PM in the Auditorium",
//       },
//       {
//         id: 3,
//         title: "Robotics Team",
//         description: "New members welcome! Meet on Wednesdays at 3:30 PM",
//       },
//     ],
//   },
//   {
//     id: "exams",
//     name: "Exams & Deadlines",
//     icon: <Book className="w-5 h-5" />,
//     color: "text-purple-600",
//     content: [
//       {
//         id: 1,
//         title: "Midterm Exams",
//         description:
//           "Starting next Monday. Check the detailed schedule on the school website.",
//       },
//       {
//         id: 2,
//         title: "Essay Deadline",
//         description: "English Literature essays due this Friday by 11:59 PM",
//       },
//       {
//         id: 3,
//         title: "Math Quiz",
//         description: "Algebra II pop quiz sometime this week. Be prepared!",
//       },
//     ],
//   },
// ];
// export default function EnhancedSchoolInfoBoard() {
//   const [activeCategory, setActiveCategory] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveCategory((prev) => (prev + 1) % categories.length);
//     }, 10000); // Switch every 10 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="h-screen relative">
//       {/* <header className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-gray-900">POKG info</h1>
//       </header> */}
//       <nav className="flex z-50 flex-row w-full justify-center overflow-x-auto gap-2 absolute top-5">
//         {categories.map((category, index) => (
//           <div
//             key={category.id}
//             onClick={() => setActiveCategory(index)}
//             className={`flex items-center rounded-lg bg-white/20 backdrop-blur-sm cursor-pointer flex-row gap-2 px-2 py-1 ${
//               categories[activeCategory].id === category.id
//                 ? categories[activeCategory].color
//                 : ""
//             }`}
//           >
//             <span>{category.icon}</span>
//             <span className="">{category.name}</span>
//           </div>
//         ))}
//       </nav>

//       <div
//         className={`w-full text-black h-full ${String(
//           "bg-" +
//             String(categories[activeCategory].color).split("-")[1] +
//             "-" +
//             String(categories[activeCategory].color).split("-")[2]
//         )} text-white font-bold text-center`}
//       >
//         <h1>Hello</h1>
//       </div>
//       {/* <div className="max-w-6xl mx-auto">
//         <Tabs value={categories[activeCategory].id} className="w-full">
//           <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
//             {categories.map((category, index) => (
//               <TabsTrigger
//                 key={category.id}
//                 value={category.id}
//                 onClick={() => setActiveCategory(index)}
//                 className={`flex items-center space-x-2 ${
//                   categories[activeCategory].id === category.id
//                     ? categories[activeCategory].color
//                     : ""
//                 }`}
//               >
//                 {category.icon}
//                 <span className="hidden sm:inline">{category.name}</span>
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           {categories.map((category) => (
//             <TabsContent key={category.id} value={category.id}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle
//                     className={`text-2xl font-bold flex items-center space-x-2 ${category.color}`}
//                   >
//                     {category.icon}
//                     <span>{category.name}</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-4">
//                     {category.content.map((item) => (
//                       <li
//                         key={item.id}
//                         className="bg-white p-4 rounded-lg shadow"
//                       >
//                         <h3 className="text-lg font-semibold">{item.title}</h3>
//                         <p className="text-gray-600">{item.description}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           ))}
//         </Tabs> */}

//       {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
//                 <MessageSquare className="w-5 h-5" />
//                 <span>Student Poll</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-lg mb-4">
//                 What&apos;s your favorite school event?
//               </p>
//               <div className="space-y-2">
//                 {[
//                   "Sports Day",
//                   "Science Fair",
//                   "Arts Festival",
//                   "Career Day",
//                 ].map((option) => (
//                   <div key={option} className="flex items-center space-x-2">
//                     <input
//                       type="radio"
//                       id={option}
//                       name="school-event"
//                       className="form-radio"
//                     />
//                     <label htmlFor={option}>{option}</label>
//                   </div>
//                 ))}
//               </div>
//               <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
//                 Submit Vote
//               </button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-gray-900">
//                 Digital Version
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center">
//               <p className="text-lg mb-4">Scan for more information:</p>
//               <Image
//                 src="/placeholder.svg"
//                 alt="QR Code"
//                 width={200}
//                 height={200}
//                 className="w-48 h-48"
//               />
//               <p className="mt-2 text-sm text-gray-600">
//                 Or visit: school-info.example.com
//               </p>
//             </CardContent>
//           </Card>
//         </div> */}
//       {/* </div> */}
//     </div>
//   );
// }

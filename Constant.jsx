// constant.tsx
// constant.tsx
export const sidebarData = [
    {
      title: "All Products",
      items: [
        { name:"Motors", icon: "📋", path: "/motors"},
        { name: "Accesories", icon: "📦", path: "/accesories" },
        { name: "Battery", icon: "📍", path: "/battery" },
        { name: "Tools", icon: "🛒", path: "/orderPage" },
        { name: "Flight Controllers", icon: "👥", path: "/fc" },
        { name: "DIY", icon: "💬", badge: 2 , path: "/diy" },
        { name: "Charger", icon: "📍", path: "/orderPage" },
        { name: "Arduino", icon: "📦", path: "/arduino" },
      ],
    },
  ];

export const categories = [
  {
    name: "Drone",
    total: '60',
    image : "/images/drone.jpg",
  },
  {
    name: "Robotics",
    total: '60',
    image : "/images/robotics.jpg",
  },
  {
    name: "RC Plane",
    total: '40',
    image : "/images/plane.jpg",
  },
  {
    name: "Soccerbot",
    total: '20',
    image : "/images/soccer.jpg",
  },
]

export const products = [
  {
    id:1,
    title: "500 RPM 37GB Gear Motor",
    category : 'popular, motor',
    quantity : 12,
    regular_price : 790,
    discounted_price: 800,
    image : "/images/37gb_500rpm.png",
    variant : 550,
    preview_details: "37GB 500RPM Gear Motor Metal 12V Gear Box Motor DC 12V 500RPM Low Speed Large Torque 12V Gear Motor 12V 500RPM Reduction Gear Motor Tools Sets For Robot Car Tools Set",
    description: "This motor suitable for most of high torque applications .Swap out a poorly running or downright faulty gear box motor for this brand new, high quality 37mm, DC 12V, 180RPM replacement and give your electrical and testing equipment a new lease of life.Benefiting from high torque and low noise, this motor is solidly constructed and ready to install in numerous applications."
  },
  {
    id:2,
    title: "750 RPM Encoder DC Motor",
    category: 'best selling',
    quantity: 8,
    regular_price: 1200,
    discounted_price: 1100,
    image: "/images/arduino_uno.png",
    variant: 750,
    preview_details: "750 RPM Encoder Motor suitable for high-precision applications...",
    description: "This encoder motor is perfect for precision robotics projects. the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and..",
  },
  {
    id:3,
    title: "100 RPM Worm Gear Motor",
    category: 'popular',
    quantity: 10,
    regular_price: 850,
    discounted_price: 800,
    image: "/images/nano_r3.png",
    variant: 100,
    preview_details: "100 RPM Worm Gear Motor for heavy-duty robotic applications...",
    description: "Durable and powerful, this worm gear motor is built to last... the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and",
  },
  {
    id:4,
    title: "100 RPM Worm Gear Motor",
    category: 'popular',
    quantity: 10,
    regular_price: 850,
    discounted_price: 800,
    image: "/images/nodemcu_v3.png",
    variant: 100,
    preview_details: "100 RPM Worm Gear Motor for heavy-duty robotic applications...",
    description: "Durable and powerful, this worm gear motor is built to last...",
  },
]
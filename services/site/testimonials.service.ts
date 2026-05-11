import type { Testimonial } from "@/types/site/testimonial.type"

const testimonials: Testimonial[] = [
  {
    id: "rafiq",
    name: "Rafiq Hasan",
    city: "Dhaka",
    avatar: "/site/customers/rafiq.png",
    quote:
      "The food quality is amazing and always delivered on time. MealMate made my daily meal worry completely stress-free.",
    rating: 5,
  },
  {
    id: "nusrat",
    name: "Nusrat Jahan",
    city: "Chittagong",
    avatar: "/site/customers/nusrat.png",
    quote:
      "I love the variety of packages and the flexibility to change my schedule. Highly recommended.",
    rating: 5,
  },
  {
    id: "adnan",
    name: "Adnan Ahmed",
    city: "Sylhet",
    avatar: "/site/customers/adnan.png",
    quote:
      "Affordable, hygienic and super tasty meals. Perfect solution for students and working professionals.",
    rating: 5,
  },
]

export async function getTestimonials() {
  return testimonials
}

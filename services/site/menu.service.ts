import type { WeeklyMenuItem } from "@/types/site/menu.type"

const weeklyMenu: WeeklyMenuItem[] = [
  {
    id: "mon-lunch",
    day: "Mon",
    date: "20 May",
    mealType: "Lunch",
    image: "/site/menu/lunch-1.png",
    items: ["Rice", "Chicken Curry", "Dal", "Mixed Vegetables"],
  },
  {
    id: "tue-lunch",
    day: "Tue",
    date: "21 May",
    mealType: "Lunch",
    image: "/site/menu/lunch-2.png",
    items: ["Rice", "Fish Curry", "Dal", "Vegetables"],
  },
  {
    id: "wed-dinner",
    day: "Wed",
    date: "22 May",
    mealType: "Dinner",
    image: "/site/menu/dinner-1.png",
    items: ["Rice", "Beef Curry", "Dal", "Vegetables"],
  },
  {
    id: "thu-dinner",
    day: "Thu",
    date: "23 May",
    mealType: "Dinner",
    image: "/site/menu/dinner-2.png",
    items: ["Rice", "Chicken Curry", "Dal", "Salad"],
  },
  {
    id: "fri-lunch",
    day: "Fri",
    date: "24 May",
    mealType: "Lunch",
    image: "/site/menu/lunch-3.png",
    items: ["Rice", "Vegetable Curry", "Dal", "Mixed Vegetables"],
  },
  {
    id: "sat-dinner",
    day: "Sat",
    date: "25 May",
    mealType: "Dinner",
    image: "/site/menu/dinner-3.png",
    items: ["Rice", "Mutton Curry", "Dal", "Dessert"],
  },
  {
    id: "sun-dinner",
    day: "Sun",
    date: "25 May",
    mealType: "Dinner",
    image: "/site/menu/dinner-3.png",
    items: ["Rice", "Mutton Curry", "Dal", "Dessert"],
  },
]

export async function getWeeklyMenu() {
  return weeklyMenu
}

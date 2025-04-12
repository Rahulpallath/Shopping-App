import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users, products, collections } from "@shared/schema";

// Create postgres connection
const connectionString = process.env.DATABASE_URL || "";
// Use for normal queries
export const client = postgres(connectionString);
// Use for drizzle queries
export const db = drizzle(client);

// Seed the database with initial data
export async function seedDatabase() {
  const productsCount = await db.select().from(products).limit(1);
  
  if (productsCount.length === 0) {
    console.log("Seeding database with initial data...");
    
    // Sample products
    const productsData = [
      {
        name: "Structural Asymmetric Top",
        description: "Unique asymmetric design for modern styling",
        price: 129.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8",
        colors: ["black", "white", "red"],
        isNew: true,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Pleated Wide-Leg Trousers",
        description: "Comfortable wide-leg design with modern pleating",
        price: 185.00,
        category: "bottoms",
        imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
        colors: ["black", "navy"],
        isNew: false,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Deconstructed Oversized Blazer",
        description: "Statement blazer with contemporary deconstructed design",
        price: 220.00,
        salePrice: 300.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1507274301514-0532a3799e18",
        colors: ["black"],
        isNew: false,
        isSale: true,
        isLimited: false,
      },
      {
        name: "Avant-Garde Leather Tote",
        description: "Premium leather tote with architectural design elements",
        price: 350.00,
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1588444837495-c6b5f8897908",
        colors: ["brown", "black"],
        isNew: false,
        isSale: false,
        isLimited: true,
        tag: "LIMITED",
      },
      {
        name: "Minimalist Canvas Shirt",
        description: "Clean-lined shirt in premium cotton canvas",
        price: 145.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1578932750294-f5075e85f702",
        colors: ["white", "beige", "black"],
        isNew: true,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Architectural Denim Jacket",
        description: "Reimagined denim with sculptural elements",
        price: 275.00,
        salePrice: 350.00,
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1548126032-079a0fb0099d",
        colors: ["blue", "black"],
        isNew: false,
        isSale: true,
        isLimited: false,
      },
      {
        name: "Avant Midi Skirt",
        description: "Contemporary midi skirt with asymmetric hem",
        price: 165.00,
        category: "bottoms",
        imageUrl: "https://images.unsplash.com/photo-1551163943-3f7953a544e6",
        colors: ["black", "beige"],
        isNew: false,
        isSale: false,
        isLimited: false,
      },
      {
        name: "Statement Collar Necklace",
        description: "Bold architectural jewelry piece",
        price: 120.00,
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
        colors: ["silver", "gold"],
        isNew: true,
        isSale: false,
        isLimited: false,
      }
    ];
    
    // Insert products
    await db.insert(products).values(productsData);
    
    // Sample collections
    const collectionsData = [
      {
        name: "Urban Summer",
        description: "Lightweight pieces for the modern city explorer.",
        category: "summer",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
      },
      {
        name: "Winter Luxe",
        description: "Sophisticated layers designed for colder days.",
        category: "winter",
        imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9"
      },
      {
        name: "Avant-Garde Limited",
        description: "Experimental designs in limited quantities.",
        category: "limited",
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae"
      }
    ];
    
    // Insert collections
    await db.insert(collections).values(collectionsData);
    
    console.log("Database seeded successfully!");
  }
}
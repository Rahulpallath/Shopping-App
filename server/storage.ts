import { 
  users, type User, type InsertUser, 
  products, type Product, type InsertProduct,
  collections, type Collection, type InsertCollection
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getAllCollections(): Promise<Collection[]>;
  getCollectionById(id: number): Promise<Collection | undefined>;
  getCollectionsByCategory(category: string): Promise<Collection[]>;
  createCollection(collection: InsertCollection): Promise<Collection>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    const result = await db.select().from(products).where(eq(products.id, id));
    return result[0];
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.category, category));
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const result = await db.insert(products).values(insertProduct).returning();
    return result[0];
  }
  
  async getAllCollections(): Promise<Collection[]> {
    return await db.select().from(collections);
  }
  
  async getCollectionById(id: number): Promise<Collection | undefined> {
    const result = await db.select().from(collections).where(eq(collections.id, id));
    return result[0];
  }
  
  async getCollectionsByCategory(category: string): Promise<Collection[]> {
    return await db.select().from(collections).where(eq(collections.category, category));
  }
  
  async createCollection(insertCollection: InsertCollection): Promise<Collection> {
    const result = await db.insert(collections).values(insertCollection).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();

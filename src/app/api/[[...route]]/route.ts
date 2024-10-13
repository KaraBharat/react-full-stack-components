// Import necessary modules from 'hono' and 'hono/vercel'
import { Hono } from "hono";
import { handle } from "hono/vercel";

// Import the products route handler
import products from "./products";

// Set the runtime environment to 'edge'
export const runtime = "edge";

// Initialize a new Hono app with a base path of '/api'
const app = new Hono().basePath("/api");

// Define routes for the app
const routes = app.route("/products", products);

// Export HTTP method handlers for the app
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

// Define a type for the app's routes
export type AppType = typeof routes;
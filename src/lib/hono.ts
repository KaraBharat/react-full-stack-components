// Import the AppType from the API route definition
// This type represents the structure of our API
import { AppType } from "@/app/api/[[...route]]/route";

// Import the hc (Hono Client) function from the Hono client library
// This function is used to create a type-safe API client
import { hc } from "hono/client";

// Create and export a type-safe API client
// The client is configured with the AppType to ensure type safety
// The NEXT_PUBLIC_APP_URL environment variable is used as the base URL for API requests
// The '!' is used to assert that the environment variable is defined (non-null assertion)
export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);

// Usage:
// This client can be imported and used throughout the application to make API calls
// It provides type-safe methods corresponding to the API routes defined in AppType
// Example:
// import { client } from '@/lib/hono';
// const response = await client.api.someEndpoint.get();

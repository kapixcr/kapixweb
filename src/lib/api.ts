// API utility functions for fetching blog posts
export interface BlogPost {
    id: number
    titulo: string
    url_imagen?: string // Make this optional
    descripcion: string
    created_at: string
    updated_at: string
  }
  
  export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch("/api/noticias")

      if (!response.ok) {
        throw new Error(`Error fetching blog posts: ${response.status}`)
      }

      const data = await response.json()
      return Array.isArray(data) ? data : []
    } catch (error) {
      console.error("Failed to fetch blog posts:", error)
      return []
    }
  }
  
  export async function fetchBlogPostById(id: number): Promise<BlogPost | null> {
    try {
      const posts = await fetchBlogPosts()
      return posts.find((post) => post.id === id) || null
    } catch (error) {
      console.error(`Failed to fetch blog post with id ${id}:`, error)
      return null
    }
  }
  
  // Helper function to format date
  export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  
  // Update the stripHtml function to work in both browser and server environments
  export function stripHtml(html: string): string {
    // For server-side rendering or environments without DOMParser
    if (typeof DOMParser === "undefined") {
      // Simple regex-based HTML stripping (not perfect but works for basic cases)
      return html
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim()
    }
  
    // For client-side rendering where DOMParser is available
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent || ""
  }
  
  // Add this helper function to safely parse an ID
  export function safeParseInt(value: string | null): number | null {
    if (!value) return null
    const parsed = Number.parseInt(value)
    return isNaN(parsed) ? null : parsed
  }
  
  

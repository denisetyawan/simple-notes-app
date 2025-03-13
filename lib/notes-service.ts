import type { Note } from "./types"

export function createNote(title: string, content: string): Note {
  return {
    id: generateId(),
    title: title.trim(),
    content: content.trim(),
    createdAt: new Date(),
  }
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}


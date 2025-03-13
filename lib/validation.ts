import type { NoteInput } from "./types"

export function validateNote(note: NoteInput): string[] {
  const errors: string[] = []

  if (!note.title.trim()) {
    errors.push("Title is required")
  }

  if (!note.content.trim()) {
    errors.push("Note content is required")
  }

  if (note.title.trim().length > 100) {
    errors.push("Title must be less than 100 characters")
  }

  return errors
}


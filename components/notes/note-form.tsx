"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { validateNote } from "@/lib/validation"
import { createNote } from "@/lib/notes-service"
import type { Note } from "@/lib/types"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface NoteFormProps {
  onAddNote: (note: Note) => void
}

export default function NoteForm({ onAddNote }: NoteFormProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate the note
    const validationErrors = validateNote({ title, content })

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    // Clear any previous errors
    setErrors([])

    // Create a new note
    const newNote = createNote(title, content)

    // Add the note via the callback
    onAddNote(newNote)

    // Reset the form
    setTitle("")
    setContent("")
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <ul className="list-disc pl-5">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Input
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[150px] w-full"
            />
          </div>

          <Button type="submit" className="w-full">
            Add Note
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


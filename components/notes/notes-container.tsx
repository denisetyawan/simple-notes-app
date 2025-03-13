"use client"

import { useState } from "react"
import NotesList from "./notes-list"
import NoteForm from "./note-form"
import type { Note } from "@/lib/types"

export default function NotesContainer() {
  const [notes, setNotes] = useState<Note[]>([])

  const addNote = (note: Note) => {
    setNotes((prevNotes) => [...prevNotes, note])
  }

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Add New Note</h2>
        <NoteForm onAddNote={addNote} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Notes</h2>
        <NotesList notes={notes} onDeleteNote={deleteNote} />
      </div>
    </div>
  )
}


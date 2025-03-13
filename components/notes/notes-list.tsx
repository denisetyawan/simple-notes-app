import type { Note } from "@/lib/types"
import NoteItem from "./note-item"
import { Card, CardContent } from "@/components/ui/card"

interface NotesListProps {
  notes: Note[]
  onDeleteNote: (id: string) => void
}

export default function NotesList({ notes, onDeleteNote }: NotesListProps) {
  if (notes.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">No notes yet. Add your first note!</CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={() => onDeleteNote(note.id)} />
      ))}
    </div>
  )
}


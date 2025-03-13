"use client"

import type { Note } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface NoteItemProps {
  note: Note
  onDelete: () => void
}

export default function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{note.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="whitespace-pre-wrap">{note.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 text-xs text-muted-foreground">
        <span>{formatDate(note.createdAt)}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash className="h-4 w-4" />
          <span className="sr-only">Delete note</span>
        </Button>
      </CardFooter>
    </Card>
  )
}


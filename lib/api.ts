import axios from "axios";
import type { Note, NoteTag } from "@/types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api/";

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number; 
}

export interface NewNote {
    title: string;
    content: string;
    tag: NoteTag; 
}

export const fetchNotes = async (page: number, search: string) => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    const params: Record<string, string | number> = { page };

    if (search.trim()) {
        params.search = search.trim();
    }

    try {
        const res = await axios.get<FetchNotesResponse>("/notes", {
            params,
            headers: { Authorization: `Bearer ${myKey}` },
        });

        return res.data;
    } catch (error) {
        alert("Failed to fetch notes:");
        throw error
    }
}

export const createNote = async (newNote: NewNote) => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    try {
        const res = await axios.post<Note>("/notes", newNote, {
            headers: { Authorization: `Bearer ${myKey}` },
        });

        return res.data;
    } catch (error) {
        alert("Failed to post note");
        throw error;
    }
}


export const deleteNote = async (noteId: string) => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    try {
        const res = await axios.delete<Note>(`/notes/${noteId}`, {
            headers: { Authorization: `Bearer ${myKey}` },
        });

        return res.data;
    } catch (error) {
        alert("Failed to delete note");
        throw error;
    }     
}

export const fetchNoteById = async (id: string) => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    try {
        const res = await axios.get<Note>(`/notes/${id}`, {
            headers: { Authorization: `Bearer ${myKey}` },
        });

        return res.data;
    } catch (error) {
        alert("Failed to fetch note");
        throw error;
    }
}
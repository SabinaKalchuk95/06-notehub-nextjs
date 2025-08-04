export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface Note {
    id: string;
    title: string;
    content: string;
    tag: NoteTag;
    userId: string;
    createdAt: string;
    updatedAt: string;
}

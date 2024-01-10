import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "NotesApp-notes",
}

export default async function NotesPage() {

    const { userId } = await auth();

    if (!userId) throw Error("Not Authenticated");

    // const allNotes = await prisma.note.findMany({ where: { usesId: userId } });


    return (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
            {/* {allNotes.map((note) => (
                <Note note={note} key={note.id} />
                ))}

            {allNotes.length === 0 && (
                <div className="col-span-full text-center font-semibold text-2xl ">
                    {"You don't have any notes yet. Click on the add note button to add a note."}
                </div>
                )} */}
        </div>
    )
}
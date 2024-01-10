"use client";

import Image from "next/image"
import Link from "next/link"
import logo from "@/assests/logo.jpg"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import AddNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import {dark} from "@clerk/themes"
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";
export default function NavBar() {
    const { theme } = useTheme();
    const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

    return (
        <>
        <div className="p-4 shadow flex w-full items-center justify-center ">
    <div className="max-w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
            <Link href="/notes" className="flex items-center gap-1">
                <Image src={logo} alt="NotesApp Logo" width={40} height={40} />
                <span className="font-bold">NotesApp</span>
            </Link>
        </div>
    

        <div className="flex items-center gap-2 justify-end flex-grow">
            <div className="flex items-center gap-2 justify-end">
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        baseTheme: theme === "dark" ? dark : undefined,
                        elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
                    }}
                />
                <ThemeToggleButton />
                <Button onClick={() => setShowAddEditNoteDialog(true)}>
                    <Plus size={20} className="mr-2" />
                    Add Note
                </Button>
                <AIChatButton />
            </div>
        </div>
    </div>
</div>

        {showAddEditNoteDialog && <AddNoteDialog open={showAddEditNoteDialog} setOpen={setShowAddEditNoteDialog} />}
        </>
    )
}

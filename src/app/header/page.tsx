'use client'

import { SidebarTrigger } from "@/components/ui/sidebar"

export default function HeaderPage() {
    return (
        <div className="flex h-16 bg-gray-400 items-center gap-2 border-b  ">
            <div className="flex  items-center gap-2">
                <SidebarTrigger className="-ml-1" />

            </div>

        </div>
    )
}
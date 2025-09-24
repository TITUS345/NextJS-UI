'use client'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"

export default function SideBarPage({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <h1>header</h1>

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <h1>Hallow</h1>
            </SidebarContent>
            <SidebarFooter>
                <div className="p-4">Sidebar Footer</div>

            </SidebarFooter>
        </Sidebar>
    )
}
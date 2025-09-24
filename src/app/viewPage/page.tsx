'use client'

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import GridCardsPage from "../gridCards/page"
import ReviewChart from "../learnChart/page"

import SideBarPage from "../sideBar/page"
import HeaderPage from "../header/page"
import PieChartPage from "../pieChart/page"


export default function ViewPage() {
    return (
        <SidebarProvider>
            <SideBarPage />
            <SidebarInset>
                <HeaderPage />
                <div className="flex flex-1 flex-col gap-2">
                    <div className="@container/main flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                        <GridCardsPage />
                        <div className="flex flex-row gap-4 px-4 lg:px-6">
                            <div className="flex-1">
                                <ReviewChart />
                            </div>
                            <div>
                                <PieChartPage />
                            </div>
                        </div>

                    </div>

                </div>
            </SidebarInset>

        </SidebarProvider>

    )
}
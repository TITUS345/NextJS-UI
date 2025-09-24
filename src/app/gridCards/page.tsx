'use client'


import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GridCardsPage() {
    return (
        <div className=" grid grid-col-1 gap-4 p-4 lg:grid-cols-1 @5xl/main:grid-cols-4">
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Card1</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="text-muted-foreground">Card1 Footer</div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Card2</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="text-muted-foreground">Card2 Footer</div>
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Card3</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="text-muted-foreground">Card3 Footer</div>
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Card4</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="text-muted-foreground">Card4 Footer</div>
                </CardFooter>
            </Card>

        </div>
    )
}
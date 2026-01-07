"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const Page = () => {
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const handleBLocking = async () => {
        setLoading(true)
        const response = await fetch('/api/demo/blocking', {
            method: "POST"
        })
        const data = await response.json()
        console.log(data)
        setLoading(false)
    }

    const handleBackgroud = async () => {
        setLoading2(true)
        const response = await fetch('/api/demo/background', {
            method: "POST"
        })
        console.log(response)
        setLoading2(false)
    }
    return (
        <div>
            <Button disabled={loading} variant={"outline"} onClick={handleBLocking}>{loading ? "Loading..." : "Blocking"}</Button>
            <Button disabled={loading2} variant={"outline"} onClick={handleBackgroud}>{loading2 ? "Loading..." : "Background"}</Button>
        </div>
    )
}

export default Page
import Link from "next/link"
export default function Navbar(){
    return (
        <div className="sticky top-0">
            <ul className="flex gap-10 justify-center bg-slate-800 p-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Routing-in-Nextjs">Routing-in-Nextjs</Link></li>
                <li><Link href="/Components-in-Nextjs">Components-in-Nextjs</Link></li>
                <li><Link href="/components-Hierarchy">Components-Hierarchy</Link></li>
                <li><Link href="/About-TailwindCss">About-TailwindCss</Link></li>
            </ul>
        </div>
    )
}
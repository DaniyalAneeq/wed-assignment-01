import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div className="grid ">
    <div className="w-full bg-slate-800 mb-0 pb-4 mt-96">
        <h1 className="underline font-bold m-2 px-4 py-4">Assignement 01</h1>
        <hr />
        <ul>
          <li><Link href="https://www.linkedin.com/in/daniyal-aneeq-ahmed-3868452b7/" target="_blank"><FaLinkedin /> Check out my LnkedIn profile and connect with us.</Link></li>
          <li><Link href="https://github.com/DaniyalAneeq" target="_blank"><FaGithub />Check out my GitHub profile for the source code.</Link></li>
        </ul>
    </div>
    </div>
    </>
  )
}

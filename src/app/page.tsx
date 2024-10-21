import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <h1 className="font-extrabold flex justify-center mt-20 text-3xl font-serif underline">What is Nextjs ?</h1>
      <div className="ml-20 mt-10 mr-20 px-20 font-serif leading-8">
        <p>It is framework of Reactjs.It has pre-written rules, that we have to follow in order to use its functionalities. Nextjs released on 25oct,2016 and then it's upgrade to 2.0 in March, 2017. Now, the latest version is nextjs 14 which was released in oct 26, 2024. </p>
        <p>Nextjs is most popular framework due to its powerful functionalities like: </p>
        <ul>
          <li><Link href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering" target="_blank" >Serverside Rendering</Link></li>
          <li><Link href="https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering" target="_blank">Clientside Rendering</Link></li>
          <li><Link href="https://nextjs.org/docs/app" target="_blank">App Routing</Link></li>
          <li><Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching" target="_blank">Data Fetching</Link></li>
          <li><Link href="https://nextjs.org/docs/pages/building-your-application/styling" target="_blank">Styling</Link></li>
          <li><Link href="https://nextjs.org/docs/pages/building-your-application/optimizing" target="_blank">Optimization</Link></li>
          <li><Link href="https://nextjs.org/docs/pages/building-your-application/configuring/typescript" target="_blank">Typescript Support</Link></li>
        </ul>
        <p>Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</p>
      
      </div>
    </div>
  );
}

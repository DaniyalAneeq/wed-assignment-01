export default async function Routing() {
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000);
    })
  return (
    <div>
      <h1 className="font-extrabold flex justify-center mt-20 text-3xl font-serif underline">
        Routing In Next.js
      </h1>
      <div className="ml-20 mt-10 mr-20 px-20 font-serif leading-8">
        <p>In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.</p>
        <br />
        <p>&lt;Link&gt; is a built-in component that extends the HTML &lt;a&gt; tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js.</p>
        <p>You can use it by importing it from next/link, and passing a href prop to the component</p>
        <h1 className="ml-20 underline font-bold">Difference between &lt;a &gt; and &lt;Link&gt;tag:</h1>
        <p><span className="underline">&lt;a&gt;</span>: is  defines a hyperlink, which is used to link from one page to another.</p>
        <p>Whenever, we use &lt;a&gt; it sends request to the server.(server side rendering).</p>
        <br />
        <p><span className="underline">&lt;Link&gt;</span>: HTML links are hyperlinks.You can click on a link and jump to another document.</p>
        <p>Links are found in nearly all web pages. Links allow users to click their way from page to page.</p>
        <p>It is rendered on server side.</p>
        <br />
        <p>Next.js is a powerful framework that makes building single-page applications (SPAs) easy and intuitive. One of its key features is its built-in routing system, which allows you to create complex navigation structures and manage page transitions with ease.</p>
      </div>
    </div>
  );
}

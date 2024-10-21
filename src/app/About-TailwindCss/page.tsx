export default function Tailwind() {
  return (
    <div>
      <h1 className="underline font-extrabold font-serif text-2xl mt-32 flex justify-center">
        What is Tailwind CSS ?
      </h1>
      <br />
      <div className="ml-20 mt-10 mr-20 px-20 font-serif leading-8">
        <p>
          Tailwind CSS is framework of CSS. It is used to design modern websites
          quickly and efficiently.Unlike traditional CSS frameworks that provide
          pre-designed components, Tailwind offers low-level utility classes
          that can be combined to create custom designs directly in your HTML.
        </p>
        <br />
        <h2 className="underline font-bold font-serif">
          Utility-First Approach:
        </h2>
        <p>
          Utility-First Approach Tailwind CSS promotes a utility-first approach,
          where you use small, single-purpose classes to style elements. This
          method allows for greater flexibility and efficiency, enabling
          developers to create responsive websites without writing custom CSS.
        </p>
        <h3 className="underline font-bold font-serif">Customization:</h3>
        <p>
          Tailwind CSS is highly customizable. You can extend the default design
          system through the tailwind.config.js file, allowing you to tailor the
          framework to your project's specific needs and branding . This makes
          it easy to create unique designs while maintaining consistency across
          your project.
        </p>
        <h4 className="underline font-bold font-serif">Performance:</h4>
        <p>
          Tailwind CSS automatically removes all unused CSS when building for
          production, ensuring that your final CSS bundle is as small as
          possible. Most Tailwind projects ship less than 10kB of CSS to the
          client . This optimization helps improve the performance of your
          website.
        </p>
        <br />
        <p>All of that, Tailwind CSS is not native, you have to install it.</p>
        <p>It is launched on November 1st, 2017</p>
      </div>
    </div>
  );
}

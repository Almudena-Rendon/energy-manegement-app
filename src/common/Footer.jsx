import { FooterInfo } from "../utils/Index";

const Footer = () => {

  return (
    <footer className="max-w-screen-xl px-4 py-20 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 bg-zinc">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        {FooterInfo.map((item) => (
          <div key={item.socialMedia} className="px-5 py-2">
            <a
               href={item.link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-base leading-6 text-gray-500 hover:text-gray-600"
            >
              {item.socialMedia}
            </a>
          </div>
        ))}
      </nav>
      <div className="flex justify-center mt-8 space-x-6">
        {FooterInfo.map((item) => (
          <a
            key={item.socialMedia}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.socialMedia}</span>
            {item.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-base leading-6 text-center text-gray-400">
        Created with React and Tailwind CSS. <br />
        © 2024 Almudena Rendón Fernández. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer


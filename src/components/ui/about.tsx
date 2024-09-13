import avatar from "/avatar.webp";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <>
      <p className="text-lg text-center md:text-justify text-gray-700 mt-2 mb-8">
        Linkrary is your creative AI-powered image generation tool. With just a
        few words, you can bring your ideas to life and create stunning visuals
        in seconds. Whether it's art, design, or inspiration, Linkrary makes it
        quick and easy to generate images tailored to your imagination.
      </p>

      <section className="bg-white p-6 md:p-8 rounded-lg shadow-inner w-full">
        <h2 className="text-xl md:text-2  xl font-semibold mb-4 text-purple-600">
          How to Use Linkrary
        </h2>
        <ul className="text-left text-gray-700 space-y-4">
          <li>
            <strong>1. Enter a Prompt:</strong> In the text area provided, type
            a creative prompt that describes the image you want to generate. Be
            as detailed or as simple as you like.
          </li>
          <li>
            <strong>2. Generate Image:</strong> Click on the "Generate Image"
            button to see your prompt come to life. You'll see the AI-generated
            image in the center of your screen.
          </li>
          <li>
            <strong>3. View Image History:</strong> All the images you generate
            are saved in the gallery section on the left. Click on any image to
            view it again or delete it if you no longer need it.
          </li>
          <li>
            <strong>4. Delete an Image:</strong> To delete an image, click the
            'X' button on the image in the gallery. If the confirmation dialog
            appears, confirm your action, and the image will be removed.
          </li>
          <li>
            <strong>5. Customize Your Experience:</strong> Use the settings to
            manage your preferences, such as skipping the confirmation dialog
            when deleting images.
          </li>
        </ul>
      </section>

      <section className="w-full max-w-xl mx-auto p-6 mt-4 bg-white rounded-lg shadow-inner">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={avatar}
            alt="Abdullah Ansari"
            className="w-24 h-24 rounded-full shadow-black/40 shadow-md"
          />
          <div className="-translate-y-1 flex flex-col items-center md:items-start">
            <h2 className="text-3xl text-left font-semibold">
              Abdullah Ansari
            </h2>
            <p className="text-gray-600 text-left">Web Developer & Designer</p>
            <div className="flex space-x-4 mt-4 md:mt-2">
              <a
                href="https://github.com/aibiansari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <FaGithub size="1.5em" />
              </a>
              <a
                href="https://aibiansari.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <FaGlobe size="1.5em" />
              </a>
              <a
                href="https://www.linkedin.com/in/aibiansari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <FaLinkedin size="1.5em" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:flex w-full justify-end my-4 font-Atkinson">
        &copy; {new Date().getFullYear()} Linkrary. All rights reserved.
      </section>
    </>
  );
};

export default About;

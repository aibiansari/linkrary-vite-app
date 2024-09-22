import Navbar from "@/components/ui/navbar";
import aibi from "/aibi.webp";

const About = () => {
  return (
    <div className="bg-white dark:bg-body min-h-screen pt-20">
      <Navbar page="about" />
      <p className="text-lg text-center md:text-justify text-gray-700 dark:text-gray-300 mx-8 mt-2 mb-8">
        Linkrary is your creative AI-powered image generation tool. With just a
        few words, you can bring your ideas to life and create stunning visuals
        in seconds. Whether it's art, design, or inspiration, Linkrary makes it
        quick and easy to generate images tailored to your imagination.
      </p>

      <section className="bg-white dark:bg-body p-6 md:p-8 rounded-lg shadow-inner w-full">
        <h2 className="text-xl md:text-2  xl font-semibold mb-4 text-purple-600">
          How to Use Linkrary
        </h2>
        <ul className="text-left text-gray-700 dark:text-gray-300 space-y-4">
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

      <section className="w-full max-w-xl mx-auto p-6 mt-4 bg-white dark:bg-body rounded-lg shadow-inner">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={aibi}
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
                <svg
                  fill="currentColor"
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a
                href="https://aibiansari.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/aibiansari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <svg
                  fill="currentColor"
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:flex w-full text-black dark:text-white justify-center my-4 font-Atkinson">
        &copy; {new Date().getFullYear()} Linkrary. All rights reserved.
      </section>
    </div>
  );
};

export default About;

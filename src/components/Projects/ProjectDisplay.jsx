import Data from "../../Data/Projects";
import Project from "./Project";

const ProjectDisplay = () => {
  return (
    <section className=" bg-Dark flex justify-start flex-wrap mb-10">
      <div className="text w-screen pb-8">
        <h2 className="text-9xl  text-white font-Display w-screen proje:text-5xl">
          My Projects:
        </h2>
      </div>
      <div className="projects flex flex-wrap justify-around items-center">
        {/* <Project /> */}
        {Data.map((dat) => {
          {
            return (
              <Project
                image={dat.image}
                name={dat.name}
                description={dat.description}
                icons={dat.technologies}
                link={dat.link}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ProjectDisplay;

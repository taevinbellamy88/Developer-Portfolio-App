import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";

export const projectsData = [
   {
      id: 1,
      projectName: "MachiningCloud",
      projectDesc:
         "A CAD/CAM tooling software designed to enhance the accuracy and convenience of creating tool assemblies for projects based on industry standards and specific machines.",
      tags: ["C#", ".NET", "SQL/SMSS", "TypeScript", "Angular"],
      demo: "https://www.machiningcloud.com/app/",
      image: one,
   },
   {
      id: 2,
      projectName: "Aquifer PE",
      projectDesc:
         "This project is a railway tracking system that allows users to obtain relevant information about train timing.",
      tags: ["React.js", "HTML/CSS/JS", ".NET", "C#", "SQL/SMSS"],
      code: "https://github.com/sabiocode/CnmPro",
      demo: "https://cnmpro.azurewebsites.net",
      image: two,
   },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/

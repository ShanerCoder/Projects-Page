import ListButton from "../Display/Buttons/ListButton";
import classes from "./ListOfForFunProjects.module.css";

function ListOfForFunProjects(props) {
  function handleClick(ref) {
    props.setSelectedProject(ref);
  }

  const projects = [
    {
      expanded_title: "Project Clicker",
      title: "PC",
      description: "Clicker game",
      ref: "PC",
    },
    {
      expanded_title: "Number Guessing",
      title: "NG",
      description: "Guess a number",
      ref: "NG",
    },
    { expanded_title: "WIP", title: "WIP", description: "WIP", ref: "N/A" },
    { expanded_title: "WIP", title: "WIP", description: "WIP", ref: "N/A2" },
    { expanded_title: "WIP", title: "WIP", description: "WIP", ref: "N/A3" },
  ];
  return (
    <ul className={classes.funList}>
      {projects.map((project) => (
        <li
          key={project.ref}
          onClick={() => {
            handleClick(project.ref);
          }}
        >
          <ListButton
            title={props.open ? project.expanded_title : project.title}
            description={props.open ? project.description : null}
            selected={props.selectedProject === project.ref}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListOfForFunProjects;

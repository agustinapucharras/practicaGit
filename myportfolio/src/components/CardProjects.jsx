import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import axios from "axios";
import { BASE_URL_PROJ } from "../constants/constants";
import "../css/Card.css";

const CardProjects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    let response = await axios.get(BASE_URL_PROJ);
    let respuesta = await response.data;
    setProjects(respuesta);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-around">
        {projects.map((project) => (
            
            <Card style={{ width: "18rem" }} key={project.id} className="cardProject">
              <Card.Img
                variant="top"
                src={project.image}
                className="imgCardProject"
              />
              <Card.Body>
                <Card.Title className="text-center">{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.git} target="_blank" className="btn btnGoGit"><i className="fa-brands fa-github"> </i> Github</a>
              </Card.Body>
            </Card>
          
        ))}
     </div>
    </div>
  );
};

export default CardProjects;

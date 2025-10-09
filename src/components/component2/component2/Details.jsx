
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from './data';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = projects.find((project) => project.id === id);

  if (!data) return <p>Project not found</p>;

  const getProjectByTitle = (title) =>
    projects.find((p) => p.title.toLowerCase() === title.toLowerCase());

  const handleNavigate = (title) => {
    const proj = getProjectByTitle(title);
    if (proj) {
      navigate(`/details/${proj.id}`);
    }
  };

  return (
    <>
      <section>
        <img className="coverImg" src={data.img} alt={data.title} />
      </section>

      <section className="project_info">
        <div className="manage">
          <div className="line"></div>
          <h3>{data.title}</h3>
          <p>{data.descr}</p>
          <div className="coloredText">
            <p>Interaction Design / Front End Development</p>
            <p>HTML / CSS / JS</p>
          </div>
        </div>

        <div className="container">
          <h4>Project Background</h4>
          <p className="about">{data.project}</p>
          <h4>Static Previews</h4>
          <img className="pic" src={data.img1} alt="Preview 1" />
          <img src={data.img2} alt="Preview 2" />
        </div>
      </section>

      <section className="navigate">
        <div
          className="move"
          onClick={() => handleNavigate(data.pre)}
          style={{ cursor: 'pointer' }}
        >
          <img src="/Path 2.svg" alt="Previous" />
          <div className="twoItem">
            <h5>{data.pre}</h5>
            <p>previous project</p>
          </div>
        </div>

        <div
          className="move"
          onClick={() => handleNavigate(data.next)}
          style={{ cursor: 'pointer' }}
        >
          <div className="twoItem">
            <h5>{data.next}</h5>
            <p>next project</p>
          </div>
          <img src="/Path 2(1).svg" alt="Next" />
        </div>
      </section>

      <section>
        <div className="align" id="space">
          <div className="question">
            <p>Interested in doing a project together?</p>
          </div>
          <div className="lineLonger"></div>
          <Link to="/contact">
            <button>contact me</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Details;

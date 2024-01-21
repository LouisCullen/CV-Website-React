import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export interface position {
  event: string;
  startDate: Date;
  endDate?: Date;
  details?: string[];
}

const timelineArray: position[] = [
  {
    event: "Started Pearson summer internship",
    startDate: new Date(2023, 5, 1),
    details: [
      "Negotiated with key stakeholders to develop an internal tooling web app",
      "Acted on user feedback to ensure the product met requirements",
      "Communicated with project managers to discuss development progress/issues",
      "Presented my contributions to upper management with positive reception",
    ],
  },
  {
    event: "Joined StartupGradJobs",
    startDate: new Date(2023, 2, 1),
    details: [
      "Acted as a primary developer on a ground-up job website",
      "Utilised UX research tools to increase signup conversion rate",
      "Worked under pressure to hotfix bugs soon after launch",
      "Discussed business plans to maximise early growth",
    ],
  },
  {
    event: "Visited AutoTrader offices for work experience",
    startDate: new Date(2023, 3, 1),
    details: [
      "Held meetings across different departments to cover many disciplines",
      "Discussed the importance of data-driven design choices",
      "Participated in pair-programming to develop a component for production",
      "Gained first-hand experience of the importance of team meetings",
    ],
  },
  {
    event: "Shadowed senior cloud architect at Diebold Nixdorf",
    startDate: new Date(2021, 4, 1),
    details: [
      "Worked with a senior cloud architect to see how cloud services are utilised in financial transactions",
      "Encountered CI/CD technologies such as Jenkins and Terraform",
      "Expanded my understanding of the benefits of cloud services beyond the curriculum",
    ],
  },
];

interface props {
  navbarHeight: number;
}

const Timeline = ({ navbarHeight }: props) => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <Container
      style={{
        alignItems: "center",
        display: "flex",
        position: "relative",
        maxWidth: "1200px",
        flexDirection: "column",
        scrollSnapAlign: "center",
        height: "100dvh",
        paddingTop: -navbarHeight,
      }}
    >
      <h1
        style={{
          width: "100%",
          textAlign: "left",
          fontWeight: "bold",
          borderBottom: "2px solid",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <a id="journey" style={{ top: navbarHeight, position: "absolute" }}></a>
        Progression
      </h1>
      <div
        style={{
          // overflow: "hidden",
          height: "100%",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#bdc3c7",
            position: "absolute",
            fontSize: "3em",
            bottom: "2vh",
            right: "5vw",
          }}
        >
          <FaArrowAltCircleLeft
            onClick={() => setCurrent((current - 1) % timelineArray.length)}
            style={{
              opacity: current === 0 ? 0 : 1,
              pointerEvents: current === 0 ? "none" : "all",
              touchAction: current === 0 ? "none" : "all",
              cursor: "pointer",
            }}
          />
          <FaArrowAltCircleRight
            onClick={() => setCurrent((current + 1) % timelineArray.length)}
            style={{
              opacity: current === timelineArray.length - 1 ? 0 : 1,
              pointerEvents:
                current === timelineArray.length - 1 ? "none" : "all",
              touchAction:
                current === timelineArray.length - 1 ? "none" : "all",
              cursor: "pointer",
            }}
          />
        </div>
        {timelineArray.toReversed().map((position, i) => (
          <TimelineItem
            position={position}
            current={current}
            key={i}
            index={i}
          />
        ))}
      </div>
    </Container>
  );
};

export default Timeline;

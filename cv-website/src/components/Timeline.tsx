import { Container } from "react-bootstrap";
import TimelineItem from "./TimelineItem";

export interface position {
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    details?: string[];
}

const timelineArray: position[] = [
    {
        company: "StartupGradJobs",
        role: "Founding Engineer",
        startDate: new Date(2023, 2, 1),
        endDate: new Date(),
        details: [
            "Acted as a primary developer on a ground-up job website",
            "Utilised UX research tools to increase signup conversion rate",
            "Worked under pressure to hotfix bugs soon after launch",
            "Discussed business plans to maximise early growth"
        ]
    },
    {
        company: "Pearson",
        role: "Software Developer Intern",
        startDate: new Date(2023, 5, 1),
        endDate: new Date(2023, 7, 1),
        details: [
            "Negotiated with key stakeholders to develop an internal tooling web app",
            "Acted on user feedback to ensure the product met requirements",
            "Communicated with project managers to discuss development progress/issues",
            "Presented my contributions to upper management with positive reception"
        ]
    },
    {
        company: "Auto Trader",
        role: "Work Experience",
        startDate: new Date(2023, 3, 1),
        details: [
            "Held meetings across different departments to cover many disciplines",
            "Discussed the importance of data-driven design choices",
            "Participated in pair-programming to develop a component for production",
            "Gained first-hand experience of the importance of team meetings"
        ]
    },
    {
        company: "Diebold Nixdorf",
        role: "Shadow Cloud Architect",
        startDate: new Date(2021, 4, 1),
        endDate: new Date(2021, 10, 1),
        details: [
            "Worked with a senior cloud architect to see how cloud services are utilised in financial transactions",
            "Encountered CI/CD technologies such as Jenkins and Terraform",
            "Expanded my understanding of the benefits of cloud services beyond the curriculum"
        ]
    },
]

interface props {
    navbarHeight: number;
}

const Timeline = ({ navbarHeight }: props) => {
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
                paddingTop: -navbarHeight
            }}
        >
            
            <h1 
                style={{ 
                    width: "100%", 
                    textAlign: "left", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid", 
                    marginTop: "2rem", 
                    marginBottom: "2rem"
                }}
            >
                <a id="journey" style={{ top: navbarHeight, position: "absolute" }}></a>
                My journey
            </h1>
            <div
                style={{
                    position: "relative",
                    maxHeight: "5vh",
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                    background: "linear-gradient(to bottom, rgba(53, 59, 72, 1), rgba(53, 59, 72, 0))"
                }}
            ></div>
            <div
                style={{
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "100%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    position: "relative",
                    marginTop: "-4.99vh",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    borderLeft: "5px solid #bdc3c7",
                    
                }}>
                    {timelineArray.toReversed().map((position, i) => 
                        <TimelineItem 
                            position={position}
                            key={i}
                            index={i}
                        />
                    )}
                </div>
            </div>
        </Container>
    )
}

export default Timeline;
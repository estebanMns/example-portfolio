import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection([experience]: any) {
    return (
        <>
            <ExperienceCard {...experience.freelance} />
            <ExperienceCard {...experience.meetzed} />
        </>
    );
}
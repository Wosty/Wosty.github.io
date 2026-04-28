import { ISection } from "@/models/section";
import SubsectionEntry from "./SubsectionEntry";

export default function SectionEntry({ section }: { section: ISection }) {
  return (
    <>
      <h4>{section.title}</h4>
      {section.subsections.map((sub, i) => (
        <SubsectionEntry key={i} subsection={sub} />
      ))}
    </>
  );
}

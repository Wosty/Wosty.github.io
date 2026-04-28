export interface ISubsection {
  title: string;
  date: string;
  points: string[];
}

export interface ISection {
  title: string;
  subsections: ISubsection[];
}

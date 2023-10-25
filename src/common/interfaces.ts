export interface ContentSectionProps {
  sequence: string;
  label: string;
  description: string;
  type?: string;
}

export interface CarouselCustomProps {
  data: Array<ContentSectionProps>;
  type: string;
}

export interface RenderContentProps {
  title: string;
  img: React.JSX.Element;
  content: React.JSX.Element;
}
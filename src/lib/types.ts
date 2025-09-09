
export interface Activity {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
  linkedinUrl: string;
}

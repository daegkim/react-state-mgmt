export interface Student {
  id: number;
  name: string;
  age: number | null;
}

export interface StudentDetail extends Student {
  grades: {
    subject: 'kor' | 'eng' | 'sci';
    score: number;
  }[];
}

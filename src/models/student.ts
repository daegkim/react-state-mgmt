export interface Grade {
  subject: string;
  score: number;
}

export interface Student {
  name: string;
  age: number | null;
  grades: Grade[];
}

export interface Topic {
    id: number;
    name: string;
    description?: string;
    tags?: string;
    practiceId: number;
    isActive: boolean;
    numberOfQuestions: number;

}
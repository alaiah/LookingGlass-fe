import { Topic } from "./topic";

export interface AssessmentTemplate {
    id: number;
    name: string;
    description?: string;
    practiceId: number;
    topicList: Topic[];

}
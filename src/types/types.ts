export interface Task {
    name: string;
    done: boolean;
    category?: Category;
}

export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
    SOCIAL = "social",
}

export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN : "project-admin",
    MEMBER: "member"
};

export const AvailableUserRole = Object.values(UserRolesEnum)
export const TasksStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in-progress",
    DONE: "done"
};

export const AvailableTaskStatues = Object.values(TasksStatusEnum)
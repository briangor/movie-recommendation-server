// Contains utility functions (e.g., validation, formatting)

export const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}
/**
 * Represents a user.
 */
type User = {
    id: number;
    name: string;
    email: string;
};

export default function getUser(id: number): Promise<User> {
    return fetch(`localhost:5500/user/${id}`).then((response) =>
        response.json(),
    );
}

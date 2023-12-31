from project.movie_specification.movie import Movie
from project.user import User

from typing import List


class MovieApp:
    def __init__(self):
        self.movies_collection: List[Movie] = []
        self.users_collection: List[User] = []

    def register_user(self, username: str, age: int):
        if self._get_user_by_username(username):
            raise Exception("User already exists!")

        new_user = User(username, age)
        self.users_collection.append(new_user)

        return f"{username} registered successfully."

    def upload_movie(self, username: str, movie: Movie):
        user = self._get_user_by_username(username)
        if not user:
            raise Exception("This user does not exist!")

        self._check_is_owner(user, movie)

        if movie in self.movies_collection:
            raise Exception("Movie already added to the collection!")

        user.movies_owned.append(movie)
        self.movies_collection.append(movie)

        return f"{username} successfully added {movie.title} movie."

    def edit_movie(self, username: str, movie: Movie, **kwargs):
        user = self._get_user_by_username(username)

        self._check_is_owner(user, movie)
        self._check_movie_in_collection(movie)

        for attribute, value in kwargs.items():
            movie.title = value if attribute == "title" else movie.title
            movie.year = value if attribute == "year" else movie.year
            movie.age_restriction = value if attribute == "age_restriction" else movie.age_restriction

        return f"{username} successfully edited {movie.title} movie."

    def delete_movie(self, username: str, movie: Movie):
        user = self._get_user_by_username(username)

        self._check_is_owner(user, movie)
        self._check_movie_in_collection(movie)

        self.movies_collection.remove(movie)
        user.movies_owned.remove(movie)

        return f"{username} successfully deleted {movie.title} movie."

    def like_movie(self, username: str, movie: Movie):
        user = self._get_user_by_username(username)

        if user.username == movie.owner.username:
            raise Exception(f"{username} is the owner of the movie {movie.title}!")

        if movie in user.movies_liked:
            raise Exception(f"{username} already liked the movie {movie.title}!")

        user.movies_liked.append(movie)
        movie.likes += 1

        return f"{username} liked {movie.title} movie."

    def dislike_movie(self, username: str, movie: Movie):
        user = self._get_user_by_username(username)

        if movie not in user.movies_liked:
            raise Exception(f"{username} has not liked the movie {movie.title}!")

        movie.likes -= 1
        user.movies_liked.remove(movie)

        return f"{username} disliked {movie.title} movie."

    def display_movies(self):
        if not self.movies_collection:
            return "No movies found."

        sorted_movies = sorted(self.movies_collection, key=lambda m: (-m.year, m.title))

        result = [m.details() for m in sorted_movies]

        return "\n".join(result)

    def __str__(self):
        usernames = [u.username for u in self.users_collection]
        titles = [m.title for m in self.movies_collection]
        collection = [
            f"All users: {', '.join(usernames)}" if usernames else "All users: No users.",
            f"All movies: {', '.join(titles)}" if titles else "All movies: No movies."
        ]
        return "\n".join(collection)

    def _get_user_by_username(self, username):
        collection = [x for x in self.users_collection if x.username == username]
        return collection[0] if collection else None

    @staticmethod
    def _check_is_owner(user: User, movie: Movie):
        if user.username != movie.owner.username:
            raise Exception(f"{user.username} is not the owner of the movie {movie.title}!")

        return True

    def _check_movie_in_collection(self, movie: Movie):
        if movie not in self.movies_collection:
            raise Exception(f"The movie {movie.title} is not uploaded!")
from unittest import TestCase, main
from project.social_media import SocialMedia

class TestSocialMedia(TestCase):
    def setUp(self):
        self.social_media = SocialMedia('Username1', 'YouTube', 100, 'gaming')
    
    def test_init(self):
        self.assertEqual('Username1', self.social_media._username)
        self.assertEqual('YouTube', self.social_media._platform)
        self.assertEqual(100, self.social_media._followers)
        self.assertEqual('gaming', self.social_media._content_type)
        self.assertEqual([], self.social_media._posts)

    def test_platform_setter_if_platform_is_not_valid_raises_value_error(self):
        with self.assertRaises(ValueError) as ve:
            self.social_media.platform = 'Facebook'

        expected = f"Platform should be one of ['Instagram', 'YouTube', 'Twitter']"

        self.assertEqual(expected, str(ve.exception))

    def test_followers_setter_if_followers_count_is_less_than_zero_raises_value_error(self):
        with self.assertRaises(ValueError) as ve:
            self.social_media.followers = -3

        expected = "Followers cannot be negative."

        self.assertEqual(expected, str(ve.exception))

    def test_create_post(self):
        result = self.social_media.create_post('My first post')

        expected = "New gaming post created by Username1 on YouTube."

        self.assertEqual(expected, result)
        self.assertEqual([{'content': 'My first post', 'likes': 0, 'comments': []}], self.social_media._posts)

    def test_like_post_if_post_index_is_invalid_returns_message(self):
        self.social_media.create_post('My first post')
        self.social_media.create_post('My second post')

        result = self.social_media.like_post(10)

        expected = "Invalid post index."

        self.assertEqual(result, expected)

    def test_like_post_if_post_has_reached_the_maximum_number_of_likes_returns_message(self):
        self.social_media.create_post('My first post')
        self.social_media._posts[0]['likes'] = 10

        result = self.social_media.like_post(0)

        expected = 'Post has reached the maximum number of likes.'

        self.assertEqual(expected, result)
        self.assertEqual(self.social_media._posts[0]['likes'], 10)

    def test_like_post_successfully(self):
        self.social_media.create_post('My first post')

        result = self.social_media.like_post(0)

        expected = f'Post liked by {self.social_media._username}.'

        self.assertEqual(expected, result)
        self.assertEqual(self.social_media._posts[0]['likes'], 1)

    def test_comment_on_post_if_comment_has_ten_characters_returns_message(self):
        self.social_media.create_post('My first post')

        result = self.social_media.comment_on_post(0, 'tenChars10')

        expected = 'Comment should be more than 10 characters.'

        self.assertEqual(expected, result)
        self.assertEqual(self.social_media._posts[0]['comments'], [])

    def test_comment_on_post_successfully(self):
        self.social_media.create_post('My first post')

        result = self.social_media.comment_on_post(0, 'valid comment')

        expected = f'Comment added by {self.social_media._username} on the post.'

        self.assertEqual(expected, result)
        self.assertEqual(self.social_media._posts[0]['comments'],
                         [{'user': self.social_media._username, 'comment': 'valid comment'}])


if __name__ == "__main__":
    main()
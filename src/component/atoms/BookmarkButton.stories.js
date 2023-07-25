import { BookmarkButton } from './BookmarkButton'

export default {
    title: 'Atoms/BookmarkButton',
    component: BookmarkButton,
};

const Template = (args) => <BookmarkButton item={null} modal={null} {...args} />

export const Primary = Template.bind({});
Primary.args = {
    isBookmarked: false
}

export const Bookmarked = Template.bind({});
Bookmarked.args = {
    isBookmarked: true
}
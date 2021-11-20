import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendListItem';
import style from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(item => (
        <FriendsListItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

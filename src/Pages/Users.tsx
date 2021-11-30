import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import userInformation from '../JasonData/users.json';
import PageNotFound from './PageNotFound';
import GOOGLE_KEY from '../frigale/key';

const containerStyle = {
  width: '400px',
  height: '400px',
};
const Users = () => {
  const [searchName, setSearchName] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [searchedUsers, setSearchedUsers] = useState(userInformation);
  const user = searchName.get('user');
  const filteredUsers = userInformation.filter((allUsers) => allUsers.name.match(user!));
  const searchOnPress = () => {
    setSearchName({ user: `${inputValue}` });
  };

  useEffect(() => {
    if (user) {
      setSearchedUsers(filteredUsers);
    } else {
      setSearchedUsers(userInformation);
    }
  }, [inputValue, searchName]);

  return (
    <>
      <div>
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchOnPress();
            }
          }}
          value={inputValue}
          type="text"
          name="user"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => searchOnPress()}
        >
          does nothing
        </button>
      </div>
      {
        searchedUsers.map(({
          id, name, address,
        }) => (
          <div key={Math.random()}>
            <Link to={`${id}`}>
              <h3>{name}</h3>
            </Link>
            <div>
              <LoadScript
                googleMapsApiKey={GOOGLE_KEY}
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{ lat: +address.geo.lat, lng: +address.geo.lng }}
                  zoom={7}
                />
              </LoadScript>
            </div>
            <Link to={`../posts/${id}`}>
              <button>See Blog Posts</button>
            </Link>
          </div>
        ))
      }
    </>
  );
};

export default Users;

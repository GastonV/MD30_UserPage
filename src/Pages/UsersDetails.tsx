import { Link, useParams } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import userInformation from '../JasonData/users.json';
import PageNotFound from './PageNotFound';
import GOOGLE_KEY from '../frigale/key';

const containerStyle = {
  width: '400px',
  height: '400px',
};
const UsersDetails = () => {
  const { id } = useParams<'id'>();
  const userDetail = userInformation.filter((user) => user.id === +id!);
  if (userDetail.length < 1) {
    return <PageNotFound />;
  }
  const center = {
    lat: +userDetail[0].address.geo.lat,
    lng: +userDetail[0].address.geo.lng,
  };
  return (
    <>
      <h1> User Details</h1>
      <Link to="/users"><button>Back</button></Link>
      {
        userDetail.map(({
          name,
          address,
          company,
          email,
          phone,
          username,
          website,
        }) => (
          <div key={Math.random()}>
            <h3>{name}</h3>
            <h4>{username}</h4>
            <ul>
              <li>{company.name}</li>
              <li>{website}</li>
            </ul>

            <div className="user--contacts">
              <ul>
                <li>{address.street}</li>
                <li>{email}</li>
                <li>{phone}</li>
                <li>
                  <LoadScript
                    googleMapsApiKey={GOOGLE_KEY}
                  >
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={7}
                    >
                      { /* Child components, such as markers, info windows, etc. */ }
                      <></>
                    </GoogleMap>
                  </LoadScript>
                  {`${address.geo.lat} ${address.geo.lng}`}
                </li>
              </ul>
            </div>
          </div>
        ))
      }
    </>
  );
};
export default UsersDetails;

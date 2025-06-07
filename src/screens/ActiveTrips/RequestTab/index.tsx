import {ScrollView} from 'react-native';
import RequestUserCard from './components/RequestCards';

const RequestTab = () => {
  const dummyRequests = [
    {
      userId: 'USR12345',
      interests: ['Travel', 'Technology'],
      rating: 4.5,
      reported: true,
    },
    {
      userId: 'USR98765',
      interests: ['Networking', 'Business'],
      rating: 4.8,
      reported: false,
    },
  ];
  return (
    <>
      <ScrollView style={{padding: 16}}>
        {dummyRequests.map((user, index) => (
          <RequestUserCard
            key={index}
            userId={user.userId}
            interests={user.interests}
            rating={user.rating}
            reported={user.reported}
            onAccept={() => console.log('Accepted USR12345')}
            onReject={() => console.log('Rejected USR12345')}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default RequestTab;

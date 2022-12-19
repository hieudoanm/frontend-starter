import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSocket } from '../../../contexts/SocketProvider';

const LivePage: NextPage = () => {
  const socket = useSocket();
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    if (socket) {
      socket.on('date-time', (newDateTime: string) => {
        setDateTime(newDateTime);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="container mx-auto h-full">
        <div className="flex h-full w-full items-center justify-center">
          {dateTime}
        </div>
      </div>
    </div>
  );
};

export default LivePage;

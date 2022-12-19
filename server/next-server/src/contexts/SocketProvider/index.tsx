import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import io, { Socket } from 'socket.io-client';
import { SOCKET_URI } from '../../configs';

const SocketContext = createContext<Socket>({} as Socket);

export const SockerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [webSocket, setSocket] = useState<Socket>();

  useEffect(() => {
    if (webSocket) {
      return;
    }

    const socket: Socket = io(SOCKET_URI);

    if (!socket.connected) {
      socket.connect();
    }

    socket.on('connect', () => {
      console.log(socket.id, socket.connected);
      setSocket(socket);
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!webSocket) {
    return <></>;
  }

  return (
    <SocketContext.Provider value={webSocket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

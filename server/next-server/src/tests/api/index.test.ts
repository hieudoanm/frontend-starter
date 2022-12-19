import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../pages/api';

describe('api /', () => {
  const mockResponse = () => {
    const response = {} as NextApiResponse;
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn().mockReturnValue(response);
    return response;
  };

  it('', () => {
    const mockedResponse = mockResponse();
    handler({} as NextApiRequest, mockedResponse);
    expect(mockedResponse.status).toBeCalledTimes(1);
    expect(mockedResponse.json).toBeCalledTimes(1);
  });
});

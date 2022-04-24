import api from "../api/api";

export interface ShorteURL {
  ok: boolean;
  result: {
    full_short_link: string;
    original_link: string;
  };
}

const getShortURL = async (url: string): Promise<ShorteURL> => {
  const response = (await api.get(`/shorten?url=${url}`)).data;

  return response;
};

const postShortURL = async (url: string): Promise<ShorteURL> => {
  const response = (await api.post(`/shorten?url=${url}`)).data;

  return response;
};

export { getShortURL, postShortURL };

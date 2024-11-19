export const useHttp = () => {
  const request = async (
    url: string,
    method?: string,
    body?: BodyInit,
    header?: object
  ) => {
    const headers = {
      "Content-type": "application/json",
      ...header,
    };


    try {
      const req = await fetch(url, { method, body, headers });

      if (!req.ok) {
        return req;
      }
      return req
    } catch (e) {
      return await Promise.reject(e);
    }
  };

  return {
    request,
  };
};


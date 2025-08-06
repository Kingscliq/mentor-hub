
const getMessage = (message: any) => {
    if (typeof message === 'object') {
      const firstKey = Object.keys(message)[0];
      const firstValue = message[firstKey];
      return firstValue;
    }
    return message;
  };
  
export const _handleAxiosError = (err: any) => {
    if (err.isAxiosError && err.response) {
      const { data } = err.response;
      if (data.message || data.error.message) {
        const responsMsg = getMessage(data.message || data.error.message);
        return { ...data, message: responsMsg };
      }
  
      if (!data.message || !data.error.message) {
        return { ...data, message: 'Unable to process request. Try again' };
      }
  
      return {
        message: 'A system error occured',
        status: false,
        statusCode: 1000,
      };
    }else{
      return {
        message: 'Check your internet connection',
      }
    }
  };

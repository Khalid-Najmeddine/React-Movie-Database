export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Error!"); //response.statusText is the error message
  }

  const data = await response.json();

  return data;
};


  
  

  

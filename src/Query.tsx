import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';


const fetchdata = async () => {
  try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      return response.data;
  } catch (err) {
      if(axios.isAxiosError(err)) {
          throw new Error(err.response ? err.response.data : "network problems")
      }
  }
}

const Query: React.FC = () => {
    // 3. Use the useQuery hook to fetch the todos
    const { data: todos, error, isLoading } = useQuery('todos', fetchdata,
    {
      staleTime: 5 * 60 * 1000,  // Data will be considered fresh for 5 minutes
      cacheTime: 30 * 60 * 1000 
    }
    
    );
    

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>An error occurred</div>;
    }
      console.log(todos, "test");


  
  return (
    <div>
      {todos.map((item: any) => (
        <div key={item.id}>
        <p>{item.id}</p>
        </div>
      ))}
    </div>
  )
}

export default Query;

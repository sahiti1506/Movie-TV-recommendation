import React, { useState } from 'react';
import axios from 'axios';

export default function Feedback() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    moviename: '',
    rating: '',
    email: '',
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state `formData` by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('mongodb+srv://2200030023:admin@cluster0.x0ki0c4.mongodb.net/movie', formData);
      if (response.status === 200)
      {
        //It will set all fields to ""
        setFormData({
          moviename: '',
          rating: '',
          email: '',
        });
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Feedback</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie Name</label>
          <input type="text" id="moviename" value={formData.moviename} onChange={handleChange} required />
        </div>
        <div>
          <label>Rating</label>
          <select id="rating" value={formData.rating} onChange={handleChange}  required>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
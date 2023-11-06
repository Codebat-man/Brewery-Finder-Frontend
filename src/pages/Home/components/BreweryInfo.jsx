import React from 'react';
import { Link } from 'react-router-dom';
const BreweryInfo = ({ breweryData }) => {
  return (
    <div className="grid grid-cols-2  my-8 gap-4">
      {breweryData.map((brewery, index) => (
                <Link to={`/brewery/${brewery.id}`}> 
                  <div key={index} className="bg-white   p-6 border border-yellow-400 rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold text-yellow-900 mb-2">🍻 {brewery.name}</h2>
          <div className="mb-2">
            <p className="text-gray-500">Brewery Address:</p>
        <p>{brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">Phone number:</p>
            <p>{brewery.phone}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">Web site URL:</p>
            <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">Current rating:</p>
            <p>{brewery.rating}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">State, City:</p>
            <p>{brewery.state}, {brewery.city}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default BreweryInfo;

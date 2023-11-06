import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GiveReview from '../../components/GiveReview';
import Reviews from '../Reviews';

const index = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchBreweryData = async () => {
      try {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setBrewery(data[0]);
          }
        } else {
          console.error('Failed to fetch brewery data');
        }
      } catch (error) {
        console.error('Error while fetching brewery data:', error);
      }
    };

    fetchBreweryData();
  }, [id]);

  return (
    <div className="py-32  p-4">
   
   <div class="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
        <div class="lg:grid-cols-[50%,1fr] grid grid-cols-1 gap-6">
       
            <div className='bg-white p-8 max-w-2xl mx-auto'>
      {brewery ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">{brewery.name}</h2>
          <p className="text-gray-700 mb-2">
            Brewery Address: {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}
          </p>
          <p className="text-gray-700 mb-2">Phone number: {brewery.phone}</p>
          <p className="text-gray-700 mb-2">
            Web site URL: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
          </p>
          <p className="text-gray-700 mb-2">Current rating: {brewery.rating}</p>
          <p className="text-gray-700 mb-2">State, City: {brewery.state}, {brewery.city}</p>
          {/* Add reviews here */}
        </>
      ) : (
        <p className="text-center text-gray-700">Loading...</p>
      )}
      </div>

<GiveReview/>
      </div>
      </div>
     
<section className="py-24 bg-yellow-50 ">
  <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
   
   <Reviews/>
  </div>
</section>
    </div>
  );
};

export default index;

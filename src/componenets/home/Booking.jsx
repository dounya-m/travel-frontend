
import {React, useState, useContext} from 'react'
import AsyncSelect from 'react-select/async'
import {TripContext} from '../../context/TripContext';

const { cities } = require("list-of-moroccan-cities"); 



function Booking() {
  const {searchTrip} = useContext(TripContext)

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState('');

    console.log(depart);
    console.log(arrive);
    console.log(date);
    
    const handleChange = (selectedOption) => {
      // console.log("handleChange", selectedOption.name);
      setDepart(selectedOption.name);
    };
  //handleChange the arive city
    const handleChangeArrive = (selectedOption) => {
      setArrive(selectedOption.name);
    };
    //handle the date
    const handleChangeDate = (e) => {
      //setDate value input
      setDate(e.target.value);
    };
    // LoadOptions function to get the value of the input and filter the cities
    const loadCities = (searchValue, callback) => {
      setTimeout(() => {
        const filteredCities = cities.filter((item) =>
          item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
        console.log("loadCities", searchValue, filteredCities);
        callback(filteredCities);
      }, 200);
    };
    
    // search for trip with api 
    const searchTripresults = async () => {
      searchTrip(depart)
    };

    

    
  return (
<form 
//EXECUTE THE SEARCHTRIP FUNCTION without loading the page
onSubmit={e => {
  e.preventDefault();
  searchTripresults();
}}
  className='flex flex-col items-center justify-center gap-4'>
    <div
    className='flex flex-wrap items-center gap-10'>
      <AsyncSelect className='p-2  w-[15vw] rounded-md'
        loadOptions={loadCities}
        defaultOptions={cities}
        isClearable
        onChange={handleChange}
        placeholder="Ville Depart"
        
      />
      <AsyncSelect className='p-2  w-[15vw] rounded-md'
        loadOptions={loadCities}
        defaultOptions={cities}
        isClearable
        onChange={handleChangeArrive}
        placeholder="Ville Arriver"
        // name="arrive"
        
      />
        <input className='p-2 border-2 border-gray-100 w-[15vw] rounded-md' type="date" placeholder='date'
        onChange={handleChangeDate}  
        />
    </div>
    <div>
      <button
      name='submit' type='submit' className='px-4 py-2 text-white bg-orange-500 rounded-lg'>
        Rechercher
      </button>
    </div>
</form>
  )
}

export default Booking
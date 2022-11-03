import axios from 'axios';
import {React, useState} from 'react'
import AsyncSelect from 'react-select/async'

const { cities } = require("list-of-moroccan-cities"); 


function Booking() {
  // this.handleChange = this.handleChange.bind(this);
    // handleInputChange function to get the value of the input
    //define the depart and arrival cities
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
    const searchTrip = async () => {

      await axios.post(`http://localhost:1080/api/trip/bookingtrip?depart=${depart}`)
      .then(res => {
        console.log('res', res);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err, "this trip don't exist");
      })
    };

    

    
  return (
<form 
//EXECUTE THE SEARCHTRIP FUNCTION without loading the page
onSubmit={e => {
  e.preventDefault();
  searchTrip();
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
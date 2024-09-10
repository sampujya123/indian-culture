import React, { useState } from 'react';
import './StateDetails.css'; // Your CSS file for styling

const StateDetails = ({ state }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const telanganaData = {
    stateSymbols: {
      birdImage: '/images/indian-roller.PNG',
      animalImage: '/images/spotted-deer.PNG',
      treeImage: '/images/jammi-tree.PNG',
      flowerImage: '/images/tangedu-flower.PNG',
    },
  };

  const districtList = ['Adilabad', 'Hyderabad', 'Karimnagar', 'Warangal', 'Nizamabad', 'Khammam'];

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    if (district === 'Warangal') {
      setShowSubNavbar(true);
    } else {
      setShowSubNavbar(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="state-details-container">
      <h1>{state}</h1>

      {/* State Symbols */}
      <h2>State Symbols of Telangana</h2>
      <div className="state-symbols">
        <div className="symbol">
          <img src={telanganaData.stateSymbols.birdImage} alt="State Bird" height={80} width={80}/>
          <b>State Bird: Indian Roller</b>
        </div>
        <div className="symbol">
          <img src={telanganaData.stateSymbols.animalImage} alt="State Animal"  height={80} width={80}/>
          <b>State Animal: Spotted Deer</b>
        </div>
        <div className="symbol">
          <img src={telanganaData.stateSymbols.treeImage} alt="State Tree"  height={80} width={80}/>
          <b>State Tree: Jammi Tree</b>
        </div>
        <div className="symbol">
          <img src={telanganaData.stateSymbols.flowerImage} alt="State Flower"  height={80} width={80}/>
          <b>State Flower: Tangedu</b>
        </div>
      </div>

      {/* List of Districts */}
      <h2>Districts of Telangana</h2>
      <div className="districts-container">
        {districtList.map((district, index) => (
          <button 
            key={index} 
            className="district-button" 
            onClick={() => handleDistrictClick(district)}
          >
            {district}
          </button>
        ))}
      </div>

      {/* Warangal Sub-Navbar */}
      {showSubNavbar && selectedDistrict === 'Warangal' && (
        <div className="sub-navbar">
          <button onClick={() => handleOptionClick('Images')}>Images</button>
          <button onClick={() => handleOptionClick('History')}>History</button>
          <button onClick={() => handleOptionClick('Traditions')}>Traditions</button>
        </div>
      )}

      {/* Display selected option */}
      {selectedOption && (
        <div className="option-content">
          <h3>{selectedOption} of Warangal</h3>
          {selectedOption === 'Images' && <p>Here are images of Warangal.</p>}
          {selectedOption === 'History' && <p>The Warangal was the ancient capital of kakatiyas dynasty, 
            which was ruled by many kings such as1.Beta Raja-I 2.Prola Raja-I 3. Beta Raja –II 4. Prola Raja – II 5.
             Rudra Deva 6. Mahadeva 7) Ganapathi Deva 8) Pratapa Rudra and 9) Rani Rurdrama Devi, who was the only woman ruler in Andhra. 
             The Kakatiyas left many monuments including the impressive Fortress, Four massive stone gateways, big Shivate temple and big lake.
              They built so many Shivate temples and big lakes for irrigation. After Kakatiyas, it came in the sway of Delhi Sultanate. 
              The Nayaka Chieftains on capturing they ruled over for few years. After demise of the Nayakas, the Warangal 
              became part of Bahmani suitanate of Golkonda. Later, it was annexed in Moghal empire in 1687 and it became 
              a part of Hyderabad state in 1724. Lastly, it was joined in Govt. of free India in Sept,1948 . 
              In 1956, the District of Warangal became a part of Andhra Pradesh under the State Reorganisation Act 
              being telugu speaking region. After separate Telangana agitation, the Telangana State was formed on 2nd June, 
              2014 and Warangal became part of Telangana State. Again, after Re-organisation of Districts in Telangana State , 
              the erstwhile District “Warangal’’ has been bifurcated into five Districts. Of which, Warangal (Rural) District 
              is formed and came into being wef 11th October,2016</p>}
          {selectedOption === 'Traditions' &&<p> <p>People of Warangal consists of both Hindus and Muslims. 
            Most of people speak Telugu and Urdu with some knowledge of Hindi and English as well.
             The people are mostly educated with an overall literacy rate of 84.16 percent including 76.79 % female 
             literacy and 91.54 % male literacy. Most of the people are dependent on agriculture for their living; 
             through tourism is another option of earning money here.</p>
             <p>Hindu and Muslim both the region prevail in this are, 
             hence all the festivals of Hindus including Holi, Diwali, Dussera, Raksha Bandhan, Ram Navami, Vinayak Chavithi,
              Sankranthi, Ugadi etc, and all festival of Muslims including Ramadan, Eid-Ul-Fitr, Eid al-Adha, Milad Un Nabi, Moharram etc. 
              Are celebrated with full enthusiasm among the people. Apart from these Bonalu Festival, Bathukamma Festival, Kakatiya Festival, 
              Shakambari Festival and Sammakka-Sarakka Jatra are special festivals of the region and are celevrated here only with some 
              of the other parts of Andhra Pradesh.</p>
          <p>Warangal is a heritage city and comes under the list of World Heritage places by UNESCO. 
  Its architecture is affected by many different dynasties over the years of history and mostly influenced 
  by Kakatiyan Dynasty around the 12th Century. Most of its attractions including Thousand Pillar Temple, 
  Ramappa Temple, Ghanpur Group of Temple, Warangal Fort and Khush Mahal are of Kakatiyan period only. 
  They used to built monuments out of single rock hence the city was previously known as Orugallu meaning “carved out of single rock”.</p></p>}
        </div>
      )}
    </div>
  );
};

export default StateDetails;

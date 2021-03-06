import React, { useRef, useState, useEffect } from 'react';
import AlertMessage from '../../components/alertMessage/AlertMessage';

const CreateFormAd = ({ addOglas, myName }) => {
  // all inputs refs
  const refRegion = useRef(null);
  const refCity = useRef(null);
  const refDateFrom = useRef(null);
  const refDateTo = useRef(null);
  const refDescription = useRef(null);

  // form results 
  const [ formResult, setFormResult ] = useState({
    regions: '',
    cities: '',
    description: '',
    from: undefined,
    to: undefined
  });

  // set message value
  const [ messages, setMessages ] = useState([]);
  // call messages 
  const callMessage = (value) => {
    setMessages([...messages, value]);
  }


  // add error to input
  const handleError = (element, name) => {
    name === '' || name === '0' || typeof name === 'undefined' ? element.current.classList.add('error') : element.current.classList.remove('error');
  }

  // handle submit form 
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle input error
    handleError(refRegion, formResult.regions);
    handleError(refCity, formResult.cities);
    handleError(refDescription, formResult.description);
    handleError(refDateFrom, formResult.from);
    handleError(refDateTo, formResult.to);
    // check validation form 
    if (formResult.regions !== '' && formResult.regions !== '0' && formResult.cities !== '' && formResult.cities !== '0' && formResult.description !== '' && formResult.from !== undefined && formResult.to !== undefined) {
      // add new ad
      addOglas(formResult);
      // reset state to default values
      setFormResult({ regions: "", cities: "", description: "", from: undefined, to: undefined });
      // write success messages
      callMessage({message: 'Uspesno ste popunili obrazac!'});  
    }
  }


  // const [ noteText, setNoteText] = useState('');
  // const characterLimit = 50;

  // get value with onchange event
  const handleChange = (event) => {
    setFormResult({ ...formResult, [event.target.name]: event.target.value });
    // if (characterLimit - event.target.value.length >= 0) {
    //   setNoteText(event.target.value);
    // }    
  };

  // get all regions
  const [ regions, setRegions ] = useState([]);
  useEffect(() => {
    fetch("server/regions.json")
      .then(res => res.json())
      .then(res => setRegions(res))
      .catch(err => console.log(err));

    return () => {}
  }, []);

  // get all cities
  const [ cities, setCities ] = useState([]);
  useEffect(() => {
    fetch("server/cities.json")
      .then(res => res.json())
      .then(res => setCities(res))
      .catch(err => console.log(err));

    return () => {}
  }, []);

  return (
    <section className='section section-add-new-contact'>
      <div className="container max-w-md">
        <form className='form' onSubmit={(event) => handleSubmit(event)}>
          <h2 className='text-center mb-4 mt-4 border-b-[1px] border-zinc-400 pb-4'>{myName}</h2>
          <h2 className='text-center mb-4 mt-4 text-2xl'>Add new Ad</h2>

          {messages.length ? messages.map((message, key) => <AlertMessage message={message.message} time={10000} key={key} /> ) : null}

          <div className='form-group'>
            <label htmlFor="regions" className='block mb-2'>Region:</label>
            <select className='select-field' name="regions" id='regions' onChange={handleChange} ref={refRegion}>
              <option value="0" defaultValue="0">Odaberite Region</option>
              {regions && regions.map((region, key) => <option key={key} value={region.region || ''}>{region.value}</option> )}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor="cities" className='block mb-2'>City:</label>
            <select className='select-field' name="cities" id='cities' onChange={handleChange} ref={refCity}>
              <option value="0" defaultValue="0">Odaberite Grad</option>
              {cities && cities.filter((city) => city.region === parseInt(formResult?.regions))
                .map((city, key) => <option key={key} value={city.value || ''} >{city.value}</option> )
              }
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor="from" className='block mb-2'>Date from:</label>
            <input className='input-field' type="date" id="from" name="from" ref={refDateFrom} value={formResult.from || ''} onChange={handleChange} />
          </div>
          
          <div className='form-group'>
            <label htmlFor="to" className='block mb-2'>Date to:</label>
            <input className="input-field" type="date" id="to" name="to" ref={refDateTo} value={formResult.to || ''} onChange={handleChange} />
          </div>

          <div className='form-group'>
            <label htmlFor="description" className='block mb-2'>Description:</label>
            <textarea className='textarea-field' rows={4} type="textarea" ref={refDescription} id="description" name="description" value={formResult.description || ''} onChange={handleChange} />
            {/* <p>Character limit: {characterLimit - noteText.length}</p> */} 
            {/* value={noteText || ''} */}
          </div>

          <div className='form-group'>
            <button type='submit' className='btn-submit'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CreateFormAd;
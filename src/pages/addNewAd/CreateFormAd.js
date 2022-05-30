import React, { useRef, useState, useEffect } from 'react';

const CreateFormAd = ({ addOglas, myName }) => {

  const refRegion = useRef(null);
  const refCity = useRef(null);
  const refDateFrom = useRef(null);
  const refDateTo = useRef(null);
  const refDescription = useRef(null);

  const [ formResult, setFormResult ] = useState({
    regions: '',
    cities: '',
    description: '',
    from: undefined,
    to: undefined
  });


  const handleError = (element, name) => {
    name === '' || name === '0' || typeof name === 'undefined' ? element.current.classList.add('error') : element.current.classList.remove('error');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    handleError(refRegion, formResult.regions);
    handleError(refCity, formResult.cities);
    handleError(refDescription, formResult.description);
    handleError(refDateFrom, formResult.from);
    handleError(refDateTo, formResult.to);

    if (formResult.regions !== '' && formResult.regions !== '0' && formResult.cities !== '' && formResult.cities !== '0' && formResult.description !== '' && formResult.from !== undefined && formResult.to !== undefined) {
      addOglas(formResult);
      setFormResult({ regions: "", cities: "", description: "", from: undefined, to: undefined });
    }
  }

  const handleChange = (event) => {
    setFormResult({ ...formResult, [event.target.name]: event.target.value });
  };

  const [ regions, setRegions ] = useState([]);
  useEffect(() => {
    fetch("server/regions.json")
      .then(res => res.json())
      .then(res => setRegions(res))
      .catch(err => console.log(err));

    return () => {}
  }, []);


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
          <h2 className='text-center mb-4 mt-4'>Add new Ad</h2>
          <div className='form-group'>
            <label htmlFor="regions" className='block mb-2'>Region:</label>
            <select className='select-field' name="regions" id='regions' onChange={handleChange} ref={refRegion}>
              <option value="0">Odaberite Region</option>
              {regions && regions.map((region, key) => <option key={key} value={region.region || ''}>{region.value}</option> )}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor="cities" className='block mb-2'>City:</label>
            <select className='select-field' name="cities" id='cities' onChange={handleChange} ref={refCity}>
              <option value="0">Odaberite Grad</option>
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
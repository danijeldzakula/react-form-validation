import React from 'react';

const FormAdResult = ({ oglas }) => {
  console.log(oglas)
  return (
    <section className='section section-add-new-ad-result'>
      <div className="container">
        <div className='result'>
          <h2 className='text-center mb-4 mt-4'>Ad result</h2>

          <table className='table'>
            <thead>
              <tr>
                <th className='border border-zinc-400 p-4'>Region</th>
                <th className='border border-zinc-400 p-4'>City</th>
                <th className='border border-zinc-400 p-4'>Description</th>
                <th className='border border-zinc-400 p-4'>Date from</th>
                <th className='border border-zinc-400 p-4'>Date to</th>
              </tr>
            </thead>
            <tbody>
              {oglas.length ? oglas?.map((ad, key) => {
                return (
                  <tr key={key}>
                    <td className='border border-zinc-400 p-4'>{ad.regions}</td>
                    <td className='border border-zinc-400 p-4'>{ad.cities}</td>
                    <td className='border border-zinc-400 p-4'>{ad.description}</td>
                    <td className='border border-zinc-400 p-4'>{ad.from}</td>
                    <td className='border border-zinc-400 p-4'>{ad.to}</td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={5} className='border border-zinc-400 p-4 text-center'>Nema rezultata</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default FormAdResult;
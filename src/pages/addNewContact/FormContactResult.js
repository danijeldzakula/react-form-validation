import React from 'react';

const FormContactResult = ({ contacts }) => {
  return (
    <section className='section section-add-new-contact-result'>
      <div className="container">
        <div className='result'>
          <h2 className='text-center mb-4 mt-4'>Contact result</h2>
          <table className='table'>
            <thead>
              <tr>
                <th className='border border-zinc-400 p-4'>Name</th>
                <th className='border border-zinc-400 p-4'>Email</th>
                <th className='border border-zinc-400 p-4'>Phone</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length ? contacts?.map((contact, key) => {
                return (
                  <tr key={key}>
                    <td className='border border-zinc-400 p-4'>{contact.name}</td>
                    <td className='border border-zinc-400 p-4'>{contact.email}</td>
                    <td className='border border-zinc-400 p-4'>{contact.phone}</td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan={3} className='border border-zinc-400 p-4 text-center'>Nema rezultata</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default FormContactResult;
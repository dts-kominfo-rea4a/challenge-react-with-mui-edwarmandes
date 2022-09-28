import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const handleAddContact = (value) => {
    console.log('value', value)
    setContacts([...contacts, value])
  }
  return (
    <div className="App">
      <header>
        <Header sx={{ margin: '15em' }} />
      </header>
      <section>
        <table style={{ width: '100%', margin: '2em' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <ContactForm addContact={(value) => handleAddContact(value)} />
              </td>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                {
                  contacts.map(single_data => (
                    <Contact data={single_data} key={single_data.phone} />
                  ))
                }
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;
// import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';

import bgImage from 'helper/image/telefon-bgc.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
// import { getContacts, getFilter } from 'redux/helpers';
import { updateFilter } from 'redux/filterSlice';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const formSubmitHandler = data => {
    repeatControl(data);
  };

  const repeatControl = newContact => {
    let nameArr = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };
    if (
      !contacts.find(
        nameArr => nameArr.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      // setContacts(prevState => [nameArr, ...prevState]);
      dispatch(addContact(nameArr));
    } else {
      Notify.info('The contact is already in the phone book!', {
        position: 'center-center',
        timeout: '1500',
      });
    }
  };

  const deleteContactFromList = idContact => {
    // setContacts(prevState =>
    //   prevState.filter(contact => contact.id !== idContact)
    // );
    dispatch(deleteContact(idContact));
  };

  const filterContacts = event => {
    // setFilter(event.currentTarget.value);
    dispatch(updateFilter(event.currentTarget.value));
  };

  // const normalizedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 24,
        color: 'antiquewhite',
        flexDirection: 'column',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'unset',
        backgroundPosition: 'center center',
      }}
    >
      <h1>Phonebook</h1>
      <FormCreateContact onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <FilterContacts value={filter} handleChange={filterContacts} />
      {contacts && (
        <CreateListContact
          contact={filtredContacts}
          deleted={deleteContactFromList}
        />
      )}
    </div>
  );
};

export default App;

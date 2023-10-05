import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';

import bgImage from 'helper/image/telefon-bgc.jpg';
import 'redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { createContact, deleteContact } from 'redux/contacts/slice';
import { filterContact } from 'redux/filter/slice';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(contacts);

  const dispatch = useDispatch();

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
      dispatch(createContact(nameArr));
    } else {
      Notify.info('The contact is already in the phone book!', {
        position: 'center-center',
        timeout: '1500',
      });
    }
  };

  const deleteContactFromList = idContact => {
    dispatch(deleteContact(idContact));
  };

  const filterContacts = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const normalizedFilter = filter.toLowerCase();

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
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

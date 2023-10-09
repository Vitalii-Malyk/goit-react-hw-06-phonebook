import { nanoid } from 'nanoid';

import {
  ListElementStyle,
  ItemElementStyle,
  ButtonElementStyle,
} from 'components/CreateListContact/CreateListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const CreateListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const deleteContactFromList = idContact => {
    dispatch(deleteContact(idContact));
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const createContactItem = () => {
    return filtredContacts.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          {`${contact.name} : ${contact.number}`}
          <ButtonElementStyle
            data-id={contact.id}
            onClick={() => deleteContactFromList(contact.id)}
          >
            x
          </ButtonElementStyle>
        </ItemElementStyle>
      );
    });
  };
  return <ListElementStyle>{createContactItem()}</ListElementStyle>;
};

export default CreateListContact;

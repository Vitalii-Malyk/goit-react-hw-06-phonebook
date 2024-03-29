import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import {
  FormElementStyle,
  InputElementStyle,
  ButtonElementStyle,
} from 'components/Forms/FormCreateContact.styled';

import { addContact } from 'redux/contactsSlice';

const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
      setId(nanoid());
    }
    if (name === 'number') {
      setNumber(value);
      setId(nanoid());
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const сreateСontact = e => {
    e.preventDefault();
    resetForm();
    return formSubmitHandler({ name, number, id });
  };
  const formSubmitHandler = data => {
    console.log(data);
    repeatControl(data);
  };
  const repeatControl = newContact => {
    let nameArr = {
      id: newContact.id,
      name: newContact.name,
      number: newContact.number,
    };
    if (contacts) {
      if (
        !contacts.find(
          nameArr =>
            nameArr.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        dispatch(addContact(nameArr));
      } else {
        Notify.info('The contact is already in the phone book!', {
          position: 'center-center',
          timeout: '1500',
        });
      }
    } else {
      dispatch(addContact(nameArr));
    }
  };

  return (
    <FormElementStyle onSubmit={сreateСontact}>
      <label>Name</label>
      <InputElementStyle
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        required
      />
      <label>Number</label>
      <InputElementStyle
        type="tel"
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        value={number}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></InputElementStyle>
      <ButtonElementStyle type="submit">Add contact</ButtonElementStyle>
    </FormElementStyle>
  );
};

export default FormCreateContact;

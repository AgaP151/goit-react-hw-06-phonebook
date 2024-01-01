import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { notifySettings } from '../utils/notifySettings';
import { defaultContacts } from '../utils/defaultContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContact: (state, { payload }) => {
      const { name, number } = payload;
      const id = nanoid();

      const includesName = state.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );

      if (includesName) {
        return Notiflix.Notify.warning(
          `${name} is already in contacts`,
          notifySettings
        );
      } else {
        const contact = { id, name, number };
        state.push(contact);
        Notiflix.Notify.success(
          `${name} was successfully added to your contacts`,
          notifySettings
        );
      }
    },

    removeContact: (state, { payload }) => {
      // console.log(payload);
      const { name, id } = payload;
      Notiflix.Notify.info(
        `${name} was successfully deleted from your contacts`,
        notifySettings
      );
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

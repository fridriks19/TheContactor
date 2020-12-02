import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';

const contactDirectory = `${FileSystem.documentDirectory}Contacts/`;

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
}

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
}

export const getAllContacts = async () => {
  await setupDirectory();
  const retList = [];
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  for (let i = 0; i< result.length; i++ ){
    const result1 = await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}${result[i]}`));
    retList.push(JSON.parse(result1))
  }
  //Sort by names
  retList.sort((a, b) => {
    return a.name > b.name
  })
  return retList;
}

export const removeContact = async name => {
    return await onException(() => FileSystem.deleteAsync(`${contactDirectory}/${name}`, { idempotent: true }));
}

export const addContact = async (contactInfo) => {
  //Here we will save the contact to the file FileSystem
  //TODO Við ættum kannski að importa '../../services/Eitthvaðffoldewr' og gera virknina þar
  const contactPath = `${contactDirectory}${contactInfo.name}-${uuid.v1()}.json`;
  console.log( contactPath)
  await setupDirectory();
  await onException(() => FileSystem.writeAsStringAsync( contactPath, JSON.stringify(contactInfo) ));
  //await FileSystem.writeAsStringAsync( contactPath, JSON.stringify(contactInfo) )
}

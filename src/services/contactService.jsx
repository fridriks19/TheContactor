import * as FileSystem from 'expo-file-system';
import Latinize from 'latinize';
import uuid from 'react-native-uuid';

const contactDirectory = `${FileSystem.documentDirectory}Contacts1/`;

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

export const searchBarUpdate = async (search) => {
  await setupDirectory();
  //if the user has unputed some letters
  const filteredList = []
  if (search.length > 0) {
    const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
    for (let i = 0; i< result.length; i++ ) {
      const filteredData = await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}${result[i]}`));
      const parsedData = JSON.parse(filteredData)
      if (parsedData.name.includes(search) === true){
        filteredList.push(JSON.parse(filteredData))
      }
    }
    //Sort by names
    filteredList.sort((a, b) => {
      return a.name > b.name
    })
    //console.log(filteredList);
    return filteredList;
  }else{
    //console.log(await getAllContacts())
    return await getAllContacts();
  }

};


export const getAllContacts = async () => {
  await setupDirectory();
  const retList = [];
  const result  = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  for (let i = 0; i < result.length; i++ ) {
    const filteredData = await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}${result[i]}`));
    retList.push(JSON.parse(filteredData))
  }
  //Sort by names
  retList.sort((a, b) => {
    return a.name > b.name
  })
  return retList;
}

export const removeContact = async contact => {
  console.log(`${contactDirectory}/${contact.name}`)
    //return await onException(() => FileSystem.deleteAsync(`${contactDirectory}/${contact.name}`, { idempotent: true }));
}

export const addContact = async (contactInfo) => {
  //Here we will save the contact to the file FileSystem
  const name = Latinize(contactInfo.name).replace(/\s/g, '')
  //TODO Við ættum kannski að importa '../../services/Eitthvaðffoldewr' og gera virknina þar
  const contactPath = `${contactDirectory}${name}-${uuid.v1()}.json`;
  await setupDirectory();
  await onException(() => FileSystem.writeAsStringAsync( contactPath, JSON.stringify(contactInfo) ));
  //await FileSystem.writeAsStringAsync( contactPath, JSON.stringify(contactInfo) )
}

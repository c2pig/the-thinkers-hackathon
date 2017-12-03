import admin from 'firebase-admin';
import account from '../../hackathon.json';
import uuid from 'uuid';

admin.initializeApp({
  credential: admin.credential.cert(account)
});

const collection = (service, docType) => {
  return admin.firestore().collection(service + '-' + docType);
}

const add = (service) => {
  return async (docType, doc) => {
    const id = uuid.v1();
    const docRef = collection(service, docType);
    const ref = await docRef.doc(id).set(doc);
    return id;
  }
}

const addWithId = (service) => {
  return (docType, doc, id) => {
    const docRef = collection(service, docType);
    return docRef.doc(id).set(doc);
  }
}

const remove = (service) => {
  return (docType, doc) => {
    const docRef = collection(service, docType);
    console.log(doc);
  }
}

const update = (service) => {
  return (docType, doc, id) => {
    const docRef = collection(service, docType);
    return docRef.doc(id).set(doc);
  }
}


const findAll = (service) => {
  return async (docType) => {
    const docRef = collection(service, docType);
    const result = await docRef.get();
    return result.docs.map(doc => {
      return doc.data();
    })
  }
}

const findDocById = (service) => {
  return async (docType, id) => {
    return findDocByFieldValue(docType, 'id', id);
  }
}

const findDocByFieldValue = (service) => {
  return async (docType, field, value) => {
    const docRef = collection(service, docType);
    const result = await docRef.where(field, '==', value).get();
    return result.docs.map(doc => {
      return doc.data();
    })
  }
}


export const initialize = (service) => {
  return {
    add: add(service),
    update: update(service),
    findAll: findAll(service),
    addWithId: addWithId(service),
    remove: remove(service),
    findDocById: findDocById(service),
    findDocByFieldValue: findDocByFieldValue(service)
  }
}

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default class FirebaseUserService{
    static login = (auth, email, password, callback) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> callback(userCredential.user))
            .catch(error => {console.log(error); callback(null)})
    }

    static logout = (auth, callback) => {
        signOut(auth)
            .then(()=> callback(true))
            .catch(error => {console.log(error); callback(false);})
    }

    static signup = (auth, login, password, callback) => {
        createUserWithEmailAndPassword(auth, login, password)
            .then((userCredential) => callback(true, userCredential.user))
            .catch((error) => {console.log(error.code); callback(false, error.code)})
    }
}
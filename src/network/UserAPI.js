import firebase from 'firebase';

class UserAPI {

    login(user){
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(user.email,user.password)
                .then((result) => resolve(result))
                .catch((error) => {
                    reject(error)
                });
        })
    }

    register(user){
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
                .then((result) => resolve(result))
                .catch((error) => {
                    reject(error)
                });
        })
    }

}

export default new UserAPI();
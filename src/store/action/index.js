import firebase from "../../config/firebase";

const facebook_login = (history, path) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                let create_user = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                    uid: user.uid
                }
                firebase.database().ref('/').child(`loginusers`).set(create_user)
                    .then(() => {
                        alert("Login Successful");
                        history.push(path);
                    })

            })
            .catch(function (error) {
            });
    }
}

const select_category = (c, history) => {
    return (dispatch) => {
        dispatch({ type: "SETCATEGORY", payload: c });
        history.push("/form");
    }
}

const get_user = () => {
    return (dispatch) => {
        let user = {};
        firebase.database().ref("/").child("loginusers").on("value", (data) => {
            user = data.val();
            dispatch({ type: "SETCURRENTUSER", payload: user });
        })
    }
}

const post_data = (details, history) => {
    return (dispatch) => {
        firebase.database().ref("/").child(`allcategories/${details.category}`).push(details)
        firebase.database().ref("/").child(`currentdata/${details.key}`).set(details)
            .then(() => {
                alert("Data has been uploaded");
                history.push("/");
            })
    }
}

const get_data = () => {
    return (dispatch) => {
        let alldata = [];
        let promise = new Promise((resolve) => {
            firebase.database().ref("/").child("currentdata").on("child_added", (data) => {
                resolve(alldata.unshift(data.val()));
            })
        });

        promise.then(() => {
            dispatch({ type: "SETDATA", payload: alldata });
        })
    }
}

const goto_addetail = (key, history) => {
    return (dispatch) => {
        firebase.database().ref("/").child("key").set(key);
        history.push("/addetail");
    }
}

const get_addetail = () => {
    return (dispatch) => {
        let k = "";
        let promise = new Promise((resolve) => {
            firebase.database().ref("/").child("key").on("value", (data) => {
                resolve(k = data.val());
            })
        });

        promise.then(() => {
            dispatch({ type: "SETKEY", payload: k });
            let d = {};
            firebase.database().ref("/").child(`currentdata/${k}`).on("value", (data) => {
                d = data.val();
                console.log("get details==>", data.val())
                dispatch({ type: "SETDETAIL", payload: d });
            })
        })
    }
}

const set_category_name = (c) => {
    return (dispatch) => {
        firebase.database().ref("/").child("category").set(c);
        let cat = "";
        let promise = new Promise((resolve) => {
            firebase.database().ref("/").child("category").on("value", (data) => {
                resolve(cat = data.val());
            })
        });

        promise.then(() => {
            dispatch({ type: "SETCATEGORYNAME", payload: cat });
            let category_data = [];
            let pr = new Promise((resolve) => {
                firebase.database().ref("/").child(`allcategories/${cat}`).on("child_added", (data) => {
                    resolve(category_data.unshift(data.val()));
                })
            });

            pr.then(() => {
                dispatch({ type: "SETCATEGORYDATA", payload: category_data });
            })
        })
    }

}

const get_category_data = () => {
    return (dispatch) => {
        let c = "";
        let promise = new Promise((resolve) => {
            firebase.database().ref("/").child("category").on("value", (data) => {
                resolve(c = data.val());
            })
        });

        promise.then(() => {
            dispatch({ type: "SETCATEGORYNAME", payload: c });
            let category_data = [];
            let pr = new Promise((resolve) => {
                firebase.database().ref("/").child(`allcategories/${c}`).on("child_added", (data) => {
                    resolve(category_data.unshift(data.val()));
                })
            });

            pr.then(() => {
                dispatch({ type: "SETCATEGORYDATA", payload: category_data });
            })
        })
    }
}


export {
    facebook_login,
    select_category,
    get_user,
    post_data,
    get_data,
    goto_addetail,
    get_addetail,
    set_category_name,
    get_category_data
};
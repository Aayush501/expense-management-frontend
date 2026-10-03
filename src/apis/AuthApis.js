const loginApiCall = async(formUsername, formPassword) => {
    const userData = await fetch('/data/UserData.json')
    .then(async(res) => await res.json())
    .then((data) => {
        const matchedUser = data.filter(obj => obj.username === formUsername && obj.password === formPassword);

        if (matchedUser.length === 0) {
            alert("User Not Found With These Credentials!");
            return null;
        }
        
        return matchedUser[0];
    });

    return userData;
} 

export {loginApiCall};
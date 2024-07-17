
export const checkValidateData = (email, password, name, isSignInForm) =>{
    const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!isEmailValid) return 'Please enter a valid email address.';

    if(!isPasswordValid) return 'Please enter a valid password.';

    if(!isSignInForm && !isNameValid) return 'Please enter a valid name.'

    return null;
}